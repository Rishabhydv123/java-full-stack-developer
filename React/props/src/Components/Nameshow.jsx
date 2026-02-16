import PropTypes from 'prop-types';

export const NameShow = ({ label, age }) => {
  return (
    <>
      <h4>{label} - {age}</h4>
    </>
  );
};

NameShow.propTypes = {
  label: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

NameShow.defaultProps = {
  label: "hello",
  age: 0
};
