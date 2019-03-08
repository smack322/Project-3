import React from "react";
import {Table, Image, Container, Row, Col } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import jobs from "../job.json"
console.log(jobs);
// or in ECMAScript 5
// import ReactBSTable from 'react-bootstrap-table';  
// var BootstrapTable = ReactBSTable.BootstrapTable;
// var TableHeaderColumn = ReactBSTable.TableHeaderColumn;

const jobTypes = [ 'A', 'B', 'C', 'D' ];

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

// validator function pass the user input value and row object. In addition, a bool return value is expected
function jobNameValidator(value, row) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  } else if (value.length < 10) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must have 10+ characters';
    response.notification.title = 'Invalid Value';
  }
  return response;
}

function jobStatusValidator(value, row) {
  const nan = isNaN(parseInt(value, 10));
  if (nan) {
    return 'Job Status must be a integer!';
  }
  return true;
}

class EditTypeTable extends React.Component {
  render() {
    const jsondata = jobs;
    // const jsondata = JSON.parse(jobs);
    console.log(jsondata);
    console.log(jobs);
    return (
      <BootstrapTable data={ jobs } cellEdit={ cellEditProp } insertRow={ true }>
          <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField='status' editable={ { validator: jobStatusValidator } }>Job Status</TableHeaderColumn>
          <TableHeaderColumn dataField='name' editable={ { type: 'textarea', validator: jobNameValidator } }>Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
          <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}


// function Blog() {
//   return (
//     <div>
//       <Container>
//       <br/>
//         <Row>
//           <Col><Image src="https://images.unsplash.com/photo-1550977616-efc580084ac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1038&q=80" fluid /></Col>
//           <Col><Image src="https://images.unsplash.com/photo-1540111970170-b1c4d4fbadaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" fluid /></Col>
//           <Col><Image src="https://images.unsplash.com/photo-1533727937480-da3a97967e95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" fluid /></Col>
//         </Row>
//         <br/>
//         <Row>
//           <Col><h1>Exercise Log</h1> </Col>
//         </Row>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Exercise</th>
//             <th>Time</th>
//             <th>Intensity</th>
//             <th>Calories Burned</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>2/26/19</td>
//             <td>Run</td>
//             <td>45 minutes</td>
//             <td>Moderate</td>
//             <td> 475 calories</td>
//           </tr>
//           <tr>
//             <td>2/27/19</td>
//             <td>Bench Press</td>
//             <td>15 minutes</td>
//             <td>Low</td>
//             <td>70 calories</td>
//           </tr>
//           <tr>
//             <td>2/28/19</td>
//             <td>Pull ups</td>
//             <td>12 minutes</td>
//             <td>Moderate</td>
//             <td>56 calories</td>
//           </tr>
//         </tbody>
//       </Table>
//       <br/>
//       <Row>
//           <Col><h1>Food Log</h1> </Col>
//         </Row>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Breakfast</th>
//             <th>Lunch</th>
//             <th>Dinner</th>
//             <th>Daily Calories</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>2/26/19</td>
//             <td>Western omelette</td>
//             <td>Ham Sandwich</td>
//             <td>Beef Tacos</td>
//             <td> 3766 calories </td>
//           </tr>
//           <tr>
//             <td>2/27/19</td>
//             <td>Oatmeal</td>
//             <td>Garden Salad</td>
//             <td>Burger with fries</td>
//             <td>2755 calories</td>
//           </tr>
//           <tr>
//             <td>2/28/19</td>
//             <td>Waffles</td>
//             <td>Chicken caesar wrap</td>
//             <td>Spaghetti with meat sauce</td>
//             <td> 3166 calories</td>
//           </tr>
//         </tbody>
//       </Table>
//       <br/>
//       <Row>
//           <Col><Image src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" fluid /></Col>
//           <Col><Image src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" fluid /></Col>
//           <Col><Image src="https://images.unsplash.com/photo-1499192424706-82662b9911f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" fluid /></Col>
//         </Row>
//         <br/>
//       </Container>
//     </div>
//   );
// }

// export default Blog;
// export default Table;
export default EditTypeTable;
