import './App.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Container>
      <Section>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}
