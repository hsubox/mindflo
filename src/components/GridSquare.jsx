import React, {Component} from 'react';
import {connect} from 'react-redux';


export class GridSquare extends Component {
  render() {
    return (
      <div className="grid-square">
        <form id="form-1">
          <div>
            <input type="checkbox" id="checkbox-1" name="checkbox-1" value="checkbox-1" className="grid-square__input" /><label htmlFor="checkbox-1" className="grid-square__label"></label>
          </div>
        </form>
      </div>
    );
  }
}

export default GridSquare;
