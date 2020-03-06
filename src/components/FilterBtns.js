import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { btn, btnActive } from './filterBtnsStyle';

function FilterBtns({ name, getName, arrName }) {
  const [isActive, setIsActive] = useState(false);

  const changeButton = () => {
    getName(name, arrName);
    setIsActive(!isActive);
  };

  return (
    <button style={isActive ? btnActive : btn} onClick={changeButton}>
      {name}
    </button>
  );
}

FilterBtns.propTypes = {
  name: PropTypes.string.isRequired
};

export default FilterBtns;
