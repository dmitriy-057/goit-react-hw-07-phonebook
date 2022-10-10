import ContactItem from './ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <tr key={id}>
              <ContactItem id={id} name={name} phone={phone} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
