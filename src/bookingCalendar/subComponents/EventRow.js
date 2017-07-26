import React from 'react';
import PropTypes from 'prop-types';
import Events from './Events';

import './table.css';
import './typography.css';

const eventsMap = [
  {
    pos: 0,
    width: 1,
    message: 'Gayatri De'
  },
  {
    pos: 2,
    width: 2,
    message: 'Kumar Venkata'
  }
];

const getEventColumn = count => {
  const eventCol = [];
  for (let i = 0; i < count; i++) {
    eventCol.push(<div className="table-col">{i}</div>);
  }
  return eventCol;
};

const EventRow = ({ dayCount }) => (
  <div className="table-row event-row">
    {getEventColumn(dayCount)}
    <Events events={eventsMap} dayCount={5} />
  </div>
);

EventRow.propTypes = {
  dayCount: PropTypes.number
};

export default EventRow;
