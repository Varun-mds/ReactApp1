import React, { Component } from 'react';


class Total extends Component {
  render() {
    return (
        <div>
            <h1>
                Total Cash:${this.props.total}
                </h1>
        </div>
    );
  }
}

export default Total;