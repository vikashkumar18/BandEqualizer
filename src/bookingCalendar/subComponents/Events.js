import React from 'react';
import PropTypes from 'prop-types';

const augmentEvents = (events, dayCount) => {
  const newEvents = events.map(event => {
    const { pos, message, width } = event;
    const left = pos * (100 / dayCount);
    const percentWidth = width * (100 / dayCount);
    return { pos, message, left, percentWidth };
  });
  return newEvents;
};

const Events = ({ events, dayCount }) => {
  const parsedEvents = augmentEvents(events, dayCount);
  if (!events.length) return null;
  return (
    <div className="table-event">
      {parsedEvents.map(event => {
        const { left, percentWidth, message } = event;
        const style = {
          position: 'absolute',
          left: `${left}%`,
          width: `${percentWidth}%`,
          'border-radius': `25%`,
          border: `1px solid black`,
          'z-index': 1,
          'background-color': 'beige'
        };
        return <div style={style}>{message}</div>;
      })}
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  dayCount: PropTypes.number
};
export default Events;
