import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
 
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }

  render() {
    // ... do things with the props
    return <Button onClick={this.handleClick}>{this.props.optionalString}</Button>
  }
}
 
Test.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  handleClick: PropTypes.func.isRequired,

}

export default Test
