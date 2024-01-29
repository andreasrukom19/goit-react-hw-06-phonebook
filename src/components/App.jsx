import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div className="wrapper">
      <h1 className="page-title">Phonebook</h1>
      <FormAddContacts />
      <h2 className="contact-title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
