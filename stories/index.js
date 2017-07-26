import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import Equalizer from './../src/equalizer';
import BookingCalendar from './../src/bookingCalendar';

const firstArgAction = decorateAction([
  args => {
    return args[0];
  }
]);

storiesOf('Equalizer', module).add('5 band', () => (
  <Equalizer onChange={firstArgAction('changed levels')} />
));
storiesOf('BookingCalendar', module).add('basic', () => <BookingCalendar />);
