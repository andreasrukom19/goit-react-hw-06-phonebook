import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './FormAddContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/reducer';

export const FormAddContacts = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contactsGroup.contacts);

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangePhone = event => {
    setPhone(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const hasDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!hasDuplicateName) {
      const contactData = {
        id: nanoid(),
        name,
        phone,
      };
      const action = addContact(contactData);
      dispatch(action);
      resetForm();
    } else {
      alert('A contact with this name already exists!');
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css['contact-form']} onSubmit={handleSubmit}>
      <label className={css['contact-form-label']}>
        <span className={css['label-text']}>Name</span>
        <input
          className={css['contact-form-input']}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name"
          id={nanoid()}
          required
        />
      </label>
      <label className={css['contact-form-label']}>
        <span className={css['label-text']}>Phone number</span>
        <input
          className={css['contact-form-input']}
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChangePhone}
          placeholder="000-00-00"
          required
        />
      </label>
      <button className={css['contact-form-btn']} type="submit">
        Add contact
      </button>
    </form>
  );
};
