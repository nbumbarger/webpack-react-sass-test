var React = require('react');
var HelloSayer  = require('./hello-sayer');


var HelloForm = React.createClass({
  getInitialState: function() {
    return {
      name: 'World'
    };
  },
  
  render: function () {
    return (
      <div className='hello-form'>
        <input type='text' value={this.state.name} onChange={this.onChange} />
        <HelloSayer name={this.state.name} />
      </div>
    )
  },
  
  onChange: function (e) {
    this.setState({
      name: e.target.value
    })
  }
})

module.exports = HelloForm;
