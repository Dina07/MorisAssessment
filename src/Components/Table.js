import React from 'react';
import {useSelector} from 'react-redux';
import {Card, Table} from 'react-bootstrap';

export default function MyTable() {
  const color = useSelector((state) => state.theme.value)

  const user = [
    {fname: 'dinesh1', lname: 'd1', email: "d1@gmail.com"},
    {fname: 'dinesh2', lname: 'd2', email: "d2@gmail.com"},
    {fname: 'dinesh3', lname: 'd3', email: "d3@gmail.com"},
    {fname: 'dinesh4', lname: '4d', email: "d4@gmail.com"},
    {fname: 'dinesh5', lname: 'd5', email: "d5@gmail.com"},
    {fname: 'dinesh6', lname: 'd6', email: "d6@gmail.com"},
    {fname: 'dinesh7', lname: 'd7', email: "d7@gmail.com"},
    {fname: 'dinesh8', lname: 'd8', email: "d8@gmail.com"},
    {fname: 'dinesh9', lname: 'd9', email: "d9@gmail.com"},
    {fname: 'dinesh10', lname: 'd10', email: "d10@gmail.com"},
    {fname: 'dinesh11', lname: 'd11', email: "d11@gmail.com"},
    {fname: 'dinesh12', lname: 'd12', email: "d12@gmail.com"},
    {fname: 'dinesh13', lname: 'd13', email: "d13@gmail.com"},
    {fname: 'dinesh14', lname: 'd14', email: "d14@gmail.com"},
    {fname: 'dinesh15', lname: 'd15', email: "d15@gmail.com"},

  ]
  return (
    <React.Fragment>

      <Card border={color} bg={color} style={{padding: '0px 15px'}}>
        <Card.Title style={{color: 'white', fontSize: '24px', fontWeight: '500'}}>User List</Card.Title>
        <Card.Title style={{color: 'white', fontSize: '14px', fontWeight: '300'}}>List of user in this app</Card.Title>
      </Card>
      <Table striped bordered hover style={{marginTop: 15}}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

          {user.map((u, i) => (
            <tr>
              <td>{i + 1}</td>
              <td className='tCap'>{u.fname}</td>
              <td>{u.lname}</td>
              <td>{u.email}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </React.Fragment>
  );
}
