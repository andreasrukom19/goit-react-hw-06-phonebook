import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { deleteContact } from '../../redux/reducer';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contactsGroup.contacts);
  const filter = useSelector(store => store.contactsGroup.filter);

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <ul className={css['contact-list']}>
      {filteredContacts.map(contact => {
        return (
          <ContactListItem
            contact={contact}
            key={contact.id}
            handleDeleteContact={handleDeleteContact}
          />
        );
      })}
    </ul>
  );
};
