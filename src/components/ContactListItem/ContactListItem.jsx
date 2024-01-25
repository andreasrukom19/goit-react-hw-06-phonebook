import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, handleDeleteContact }) => {
  const { id, name, phone } = contact;
  return (
    <li className={css['contact-list-item']}>
      <span>{name}:</span>
      <span>{phone}</span>
      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={css['contact-del-btn']}
      >
        Delete
      </button>
    </li>
  );
};
