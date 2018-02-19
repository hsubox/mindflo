import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/Header';
import Grid from './components/Grid';
import Playground from './components/Playground';

import './styles/app.scss';

ReactDOM.render(
  <div>
    <Header />
    <Grid />
    <Playground />
    </div>,
  document.getElementById('app')
);
