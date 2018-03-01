import React, {Component} from 'react';
import GridColumn from './GridColumn';

export class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <GridColumn />
      </div>
    );
  }
}

export default Grid;
