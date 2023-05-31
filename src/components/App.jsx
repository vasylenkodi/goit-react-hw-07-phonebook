import React from 'react';
import shortid from 'shortid';import ContactsForm from './ContactsForm';
import { Search } from './Search/Search';
import Contacts from './Contacts';

export default function App() {

  const inputId = shortid.generate();
  const telId = shortid.generate();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm id={inputId} telId={telId} />

      <h2>Contacts</h2>
      <Search />
      <Contacts />
    </div>
  );
}
