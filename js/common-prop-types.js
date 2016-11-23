import { PropTypes } from 'react';

export const userPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  age: PropTypes.number,
  phone: PropTypes.string,
  image: PropTypes.string,
  phrase: PropTypes.string
});