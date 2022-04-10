import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const getVisibleContacts = createAction('contacts/getVisibleContacts');

const contactsActions = {
  addContact,
  deleteContact,
  changeFilter,
  getVisibleContacts,
};
export default contactsActions;
