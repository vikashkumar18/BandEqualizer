import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectBox extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      value
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    this.setState({ value });
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      value
    });
    this.props.onChange(value);
  }
  render() {
    const { value = 'preset' } = this.state;
    const { options } = this.props;
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        {options.map(option => <option value={option.value}>{option.label}</option>)}
      </select>
    );
  }
}

SelectBox.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SelectBox;
