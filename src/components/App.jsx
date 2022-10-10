import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactFrom/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContacts } from '../redux/operations';
import { Loader } from './Loader/Loader';
export const App = () => {
  const dispatch = useDispatch();

  // const { items, error } = useSelector(state => state.contacts);
  const { items, isLoading, error } = useSelector(state => state.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <ContactForm />
      <Filter />

      {items.length > 0 && <ContactList />}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  );
};
