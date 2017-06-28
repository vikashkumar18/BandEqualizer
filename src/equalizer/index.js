import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RangeBarCollection from './subComponent/RangeBarCollection';
import FrequencyBand from './subComponent/FrequencyBand';
import RangeMarkers from './subComponent/RangeMarkers';
import SelectBox from './subComponent/SelectBox';
import './equalizer.css';

const presets = {
  preset: [0, 0, 0, 0, 0],
  rock: [0, 3, 3, 1, -1],
  pop: [6, 0, 3, 2, 1],
  jazz: [0, -6, -12, -6, 0],
  classical: [0, 6, 12, 6, 0]
};

const selectOptions = [
  {
    label: 'Presets',
    value: 'preset'
  },
  {
    label: 'Rock',
    value: 'rock'
  },
  {
    label: 'Pop',
    value: 'pop'
  },
  {
    label: 'Jazz',
    value: 'jazz'
  },
  {
    label: 'Classical',
    value: 'classical'
  }
];

class Equalizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: presets['preset'],
      selectedValue: 'preset'
    };
    this.rangeChange = this.rangeChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { settings = presets['preset'], selectedValue = 'preset' } = nextProps;
    this.setState({ settings, selectedValue });
  }
  rangeChange(valObj) {
    const { pos, value } = valObj;
    const { settings } = this.state;
    const newSettings = Object.assign([], settings);
    newSettings[pos] = value;
    this.setState({ settings: newSettings });
    this.props.onChange(newSettings);
  }

  selectChange(value) {
    const settings = presets[value];
    this.setState({ settings });
  }
  render() {
    const freqBands = ['60', '310', '1k', '6k', '16k'];
    const { settings, selectedValue } = this.state;
    return (
      <div className="container">
        <RangeMarkers min="-12 db" mid="0" max="+12 db" />
        <div>
          <RangeBarCollection min={-12} max={12} settings={settings} onChange={this.rangeChange} />
          <FrequencyBand freqBands={freqBands} />
        </div>
        <div>
          <SelectBox options={selectOptions} value={selectedValue} onChange={this.selectChange} />
        </div>
      </div>
    );
  }
}

Equalizer.propTypes = {
  onChange: PropTypes.func
};

export default Equalizer;
