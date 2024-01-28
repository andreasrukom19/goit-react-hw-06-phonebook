// import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { store } from '../redux/store';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   const contactsList = JSON.parse(savedContacts);
  //   if (contactsList && contactsList.length > 0) {
  //     setContacts(contactsList);
  //   }
  // }, []);

  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contactsGroup.contacts);
  const filter = useSelector(store => store.contactsGroup.filter);

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
    console.log(contactData);
    // setContacts(prevContacts => [...prevContacts, contactData]);
    const action = {
      type: 'contacts/addContact',
      payload: contactData,
    };
    dispatch(action);
  };

  const handleDeleteContact = contactId => {
    const action = {
      type: 'contacts/deleteContact',
      payload: contactId,
    };

    dispatch(action);
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    const action = {
      type: 'contacts/setFilter',
      payload: value,
    };

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
