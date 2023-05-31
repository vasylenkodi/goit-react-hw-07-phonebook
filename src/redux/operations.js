import {
  fetchInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';

const getContacts = () => async dispatch => {
  try {
    dispatch(fetchInProgress());
    const response = await fetch(
      'https://647734759233e82dd53b249e.mockapi.io/contacts'
    );
    const data = await response.json();
    dispatch(fetchingSuccess(data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

const addContact = contactData => async dispatch => {
  try {
    dispatch(fetchInProgress());
    const response = await fetch(
      'https://647734759233e82dd53b249e.mockapi.io/contacts',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(contactData),
      }
    );
      dispatch(getContacts());
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
    try {
        dispatch(fetchInProgress());
        const response = await fetch(
          `https://647734759233e82dd53b249e.mockapi.io/contacts/${contactId}`,
          {
            method: 'DELETE',
          }
        );
        dispatch(getContacts());
    } catch (error) {
        dispatch(fetchingError(error.message));
    }
}

export { getContacts, addContact, deleteContact };
