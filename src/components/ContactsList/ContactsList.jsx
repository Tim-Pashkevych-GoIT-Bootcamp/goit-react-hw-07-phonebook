import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { ContactFormButton } from 'components';
import { deleteContact, getContacts } from './../../redux/contactsSlice';
import { getFilter } from './../../redux/filterSlice';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {filteredContacts.length > 0 && (
        <ul className={css.contactsList}>
          {filteredContacts.map(({ id, name, number }, index) => (
            <li key={id} className={css.contactListItem}>
              <p>{`${++index}. ${name}: ${number}`}</p>
              <ContactFormButton
                text="Delete"
                onClick={() => dispatch(deleteContact(id))}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
