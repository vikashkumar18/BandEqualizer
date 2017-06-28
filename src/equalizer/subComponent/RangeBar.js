import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './range_bar.css';

class RangeBar extends Component {
  constructor(props) {
    super(props);
    const { value, pos } = props;
    this.state = {
      value,
      pos
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    this.setState({ value });
  }
  handleChange(event) {
    const value = Number(event.target.value);
    this.setState({
      value
    });
    this.props.onChange({ pos: this.state.pos, value });
  }
  render() {
    const { min, max } = this.props;
    const { value = 0 } = this.state;
    return (
      <input type="range" min={min} max={max} value={value} onChange={this.handleChange} step="1" />
    );
  }
}

export default RangeBar;
