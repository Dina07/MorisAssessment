

import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeTheme, selectedTheme} from "../MyRedux/Handler";
import {Form, Card} from 'react-bootstrap';
export default function Setting() {
  const color = useSelector(selectedTheme)
  const dispatch = useDispatch()
  const themes = {'Theme 1': 'primary', 'Theme 2': 'secondary', 'Theme 3': 'info', 'Theme 4': 'warning'}

  return (
    <div>
      <Card border={color} bg={color} style={{padding: '0px 15px'}}>
        <Card.Title style={{color: 'white', fontSize: '24px', fontWeight: '500'}}>Themes</Card.Title>
        <Card.Title style={{color: 'white', fontSize: '14px', fontWeight: '300'}}>Choose a theme for this app</Card.Title>
      </Card>
      {Object.keys(themes).map((type) => (
        <Form.Check
          checked={themes[type] === color}
          className="tCap"
          type='radio'
          label={themes[type]}
          style={{margin: '15px', fontSize: '20px', fontWeight: '500'}}
          onChange={() => dispatch(changeTheme(themes[type]))}
          id={`default-${type}`}
        />))
      }

    </div>
  );
}
