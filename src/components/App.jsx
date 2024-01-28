import { nanoid } from 'nanoid';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/reducer';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contactsGroup.contacts);
  const filter = useSelector(store => store.contactsGroup.filter);

  const handleSubmitForm = formData => {
    const hasDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicateName) {
      alert('A contact with this name already exists!');
      return;
    }
    const contactData = {
      id: nanoid(),
      ...formData,
    };
    const action = addContact(contactData);
    dispatch(action);
  };

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    const action = setFilter(value);
    dispatch(action);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div className="wrapper">
      <h1 className="page-title">Phonebook</h1>
      <FormAddContacts onSubmit={handleSubmitForm} />
      <h2 className="contact-title">Contacts</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
