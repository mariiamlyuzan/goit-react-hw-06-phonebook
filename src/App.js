import './App.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from './redux/contacts-actions';
import { getContacts, getFilter } from './redux/contacts-selectors';

export default function App({ addContact }) {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <Container>
      <Section>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section>
        <h2 className="title">Contacts</h2>
        <Filter
          value={filter}
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        />
        <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      </Section>
    </Container>
  );
}
