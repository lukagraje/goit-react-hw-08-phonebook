import PropTypes from "prop-types";
import { FilterContainer, Input, Label } from "./FilterStyles.styled";

const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <Label>Find contact: </Label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
