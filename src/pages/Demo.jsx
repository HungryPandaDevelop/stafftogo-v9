import React from 'react';

import ReactToPrint from 'react-to-print';

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class DataComponent extends React.Component {
  render() {
    return (
      <table style={thStyle} className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Product A</th>
            <th>Product B</th>
            <th>Product C</th>
            <th>Product D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Company A</td>
            <td>5</td>
            <td>6</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Company B</td>
            <td>1</td>
            <td>5</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Company C</td>
            <td>1</td>
            <td>6</td>
            <td>8</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Company D</td>
            <td>1</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Company E</td>
            <td>3</td>
            <td>0</td>
            <td>3</td>
            <td>0</td>
          </tr>
          <tr>
            <td><strong>Gross Total</strong></td>
            <td>11</td>
            <td>19</td>
            <td>14</td>
            <td>12</td>
          </tr>
        </tbody>
        <caption>Previously sold products</caption>
      </table>
    );
  }
}

class PdfComponent extends React.Component {

  render() {
    return (
      <div>
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
        />
        <DataComponent ref={(response) => (this.componentRef = response)} />
      </div>
    );
  }
}

const Demo = () => {
  return (
    <div>
      <div className="stub"></div>
      <div className="main-full">
        <h1>Demo</h1>
      </div>
      <div className="main-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ut. Exercitationem dicta incidunt ratione placeat labore distinctio, dignissimos vitae mollitia doloremque deserunt, porro suscipit accusamus? Optio vitae fuga odit aliquid!
      </div>
      <div className="main-full">
        <PdfComponent />
      </div>
    </div>
  )
}

export default Demo
