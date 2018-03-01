import React, {Component} from 'react';
import Grid from './Grid';
import Header from './Header';
import Playground from './Playground';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid />
        <Playground />
      </div>
    );
  }
}

export default Home;
