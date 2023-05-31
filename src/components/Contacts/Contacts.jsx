import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, deleteContact } from 'redux/operations';
import css from './contacts.module.css';

export default function Contacts() {
  const onContactDelete = event => {
    contactDeleteHandler(event.currentTarget.dataset.id);
  };

  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();  

  const filter = useSelector(state => state.filter);

    useEffect(() => {
      dispatch(getContacts());
    }, [dispatch]);

  const filterToLowercase = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterToLowercase);
  });

  const contactDeleteHandler = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  const contactsArray = visibleContacts;
  return (
    <ul className={css.contactsList}>
      {contactsArray.map(contact => {
        return (
          <li key={contact.id} className={css.contactsList__item}>
            {contact.name}: {contact.number}{' '}
            <button
              type="button"
              disabled={isLoading}
              data-id={contact.id}
              onClick={onContactDelete}
              className={css.deleteButton}
            >
              delete
            </button>{' '}
          </li>
        );
      })}
    </ul>
  );
}
