import PropTypes from "prop-types";
import {
  ItemContainer,
  ContactName,
  ContactNumber,
  DeleteButton,
  LiWrapper,
  DivWrapper
} from "./ContactItemStyles.styled";

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <ItemContainer>
      <LiWrapper key={contact.id}>
        <DivWrapper>
          <ContactName>{contact.name}</ContactName>
          <ContactNumber> {contact.number}</ContactNumber>
        </DivWrapper>
        <DeleteButton onClick={() => deleteContact(contact.id)}>
          Delete contact
        </DeleteButton>
      </LiWrapper>
    </ItemContainer>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
