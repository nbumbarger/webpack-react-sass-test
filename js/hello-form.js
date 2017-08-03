import React, { Component } from 'react';
import HelloSayer from './hello-sayer';

class HelloForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'World'
    };
    this.onChange = this.onChange.bind(this);
  }

  render () {
    return (
      <div className='hello-form'>
        <input type='text' value={this.state.name} onChange={this.onChange} />
        <HelloSayer name={this.state.name} />
      </div>
    )
  }
  
  onChange (e) {
    this.setState({
      name: e.target.value
    })
  };
}

module.exports = HelloForm;
