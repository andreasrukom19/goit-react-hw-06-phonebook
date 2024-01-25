import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const contactsList = JSON.parse(savedContacts);
    if (contactsList && contactsList.length > 0) {
      setContacts(contactsList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

    setContacts(prevContacts => [...prevContacts, contactData]);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    setFilter(value);
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
