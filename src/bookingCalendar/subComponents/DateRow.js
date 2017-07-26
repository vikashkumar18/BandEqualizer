import React from 'react';
import PropTypes from 'prop-types';

import './table.css';
import './typography.css';

const DateRowHeader = ({ days }) => {
  return (
    <div className="table-row header">
      {days.map(day => <div className="text">{day}</div>)}
    </div>
  );
};

DateRowHeader.propTypes = {
  days: PropTypes.arrayOf(PropTypes.string)
};

export default DateRowHeader;
