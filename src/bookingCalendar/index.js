import React from 'react';
import PropTypes from 'prop-types';
import DateRowHeader from './subComponents/DateRow';
import EventRow from './subComponents/EventRow';

import './subComponents/base.css';

const days = ['02 Mon', '03 Tue', '04 Wed', '05 Thu', '06 Fri'];
const numberOfRooms = 10;

const getAllowedNoOfEventRows = (noOfRows, noOfColumns) => {
  const eventRowArray = [];
  for (let i = 0; i < noOfRows; i++) {
    eventRowArray.push(<EventRow dayCount={noOfColumns} />);
  }
  return eventRowArray;
};

const BookingCalendar = () => {
  return (
    <div>
      <DateRowHeader days={days} />
      {getAllowedNoOfEventRows(numberOfRooms, days.length)}
    </div>
  );
};

export default BookingCalendar;
