import css from './AddContact.module.css'

const AddContact = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input type='text' name='name' value={name} onChange={handleChange} required />
      </label>
      <label>
        Number
        <input type="tel" name="number" value={number} onChange={handleChange} required />
      </label>
      <button className={css.submitButton} type='submit'>Add Contact</button>
    </form>
  );
};

export default AddContact;
