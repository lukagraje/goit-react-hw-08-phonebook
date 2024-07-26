import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";
import { List } from "./ContactListStyles.styled";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <List>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
