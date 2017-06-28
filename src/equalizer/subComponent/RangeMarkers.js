import React from 'react';
import PropTypes from 'prop-types';
import './range_marker.css';

const RangeMarker = ({ min, mid, max }) => {
  return (
    <div className="container_range">
      <span>{min}</span>
      <span>{mid}</span>
      <span>{max}</span>
    </div>
  );
};

RangeMarker.propTypes = {
  min: PropTypes.string,
  mid: PropTypes.string,
  max: PropTypes.string
};

export default RangeMarker;
