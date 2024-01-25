import css from './Filter.module.css';

export const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <div>
      <label className={css['filter-label']}>
        <span className={css['filter-label-text']}>Find contacts by name</span>
        <input
          className={css['filter-input']}
          type="text"
          name="keywords"
          onChange={handleChangeFilter}
          value={filter}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};
