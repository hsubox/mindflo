import React, {Component} from 'react';
import GridSquare from './GridSquare';

export class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <GridSquare />
      </div>
    );
  }
}

export default Grid;
