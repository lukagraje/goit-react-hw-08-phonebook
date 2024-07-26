import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/Contacts/ContactForm/ContactForm";
import ContactList from "../components/Contacts/ContactList/ContactList";
import Filter from "../components/Contacts/SearchFilter/Filter";
import { fetchContacts, addContact, deleteContact } from "../redux/operations";
import { setFilter } from "../redux/slices/phonebookSlice";
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
} from "../redux/selectors/selectors";
import { useAuth } from "../redux/hooks/useAuth";
import { nanoid } from "nanoid";
import { Title, SubTitle } from "../components/Contacts/App.styled";
import { Helmet } from "react-helmet-async";

export default function Phonebook() {
  const dispatch = useDispatch();
  const { token } = useAuth();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    if (token) dispatch(fetchContacts());
  }, [token, dispatch]);

  const handleAddContact = (name, number) => {
    const newContact = { name, number, id: nanoid() };
    const checkContact = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (checkContact) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleChange = (ev) => {
    dispatch(setFilter(ev.target.value));
  };

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleAddContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={handleChange} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={handleDeleteContact}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
