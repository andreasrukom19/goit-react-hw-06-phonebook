import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => {
        return (
          <ContactListItem
            contact={contact}
            key={contact.id}
            handleDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};
