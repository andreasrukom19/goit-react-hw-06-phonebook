import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './FormAddContacts.module.css';

export const FormAddContacts = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangePhone = event => {
    setPhone(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const dataInput = { name, phone };
    onSubmit(dataInput);
    resetForm();
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
