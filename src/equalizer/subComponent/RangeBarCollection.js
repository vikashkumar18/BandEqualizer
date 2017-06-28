import React from 'react';
import PropTypes from 'prop-types';
import RangeBar from './RangeBar';
import './rangebar_collection.css';

const RangeBarCollection = ({ settings, onChange, min, max }) => {
  const rangeInput = settings.map((val, index) => (
    <RangeBar min={min} max={max} value={val} pos={index} onChange={onChange} />
  ));
  return (
    <div className="input-vertical">
      {rangeInput}
    </div>
  );
};

RangeBarCollection.propTypes = {
  settings: PropTypes.array,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number
};

export default RangeBarCollection;
