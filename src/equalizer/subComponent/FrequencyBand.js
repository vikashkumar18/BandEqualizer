import React from 'react';
import PropTypes from 'prop-types';
import './frequency_band.css';

const FrequencyBand = ({ freqBands }) => {
  const labels = freqBands.map(val => <span>{val}</span>);
  return (
    <div className="levels">
      {labels}
    </div>
  );
};

FrequencyBand.propTypes = {
  freqBands: PropTypes.array
};

export default FrequencyBand;
