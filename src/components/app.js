import React, { Component } from 'react';
import Posts from '../components/posts_index';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>

    );
  }
}
