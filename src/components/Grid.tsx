import * as React from "react";
import {Component} from "react";

export class Grid extends Component {
  public render() {
    return (
      <div className="grid">
        <table>
          <tr>
            <th>Wow, cool grid!</th>
            <th>Ooh</th>
            <th>Snazzy!!!</th>
          </tr>
          <tr>
            <th>3</th>
            <td>4</td>
            <td>8</td>
          </tr>
          <tr>
             <th>1</th>
             <td>5</td>
             <td>0</td>
           </tr>
        </table>
      </div>
    );
  }
}

export default Grid;
