

import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeTheme, selectedTheme} from "../MyRedux/Handler";
import {Form, Card} from 'react-bootstrap';
import {isThemedColor} from "./Utilis";

export default function Setting() {
  const color = useSelector(selectedTheme)
  const dispatch = useDispatch()
  const themes = {'Theme 1': 'primary', 'Theme 2': 'secondary', 'Theme 3': 'info', 'Theme 4': 'warning'}

  return (
    <div>
      <Card border={color} bg={color} style={isThemedColor(color) ? {padding: '0px 15px'} : {padding: '0px 15px', backgroundColor: color, border: "1px solid" + color}}>
        <Card.Title className="txtsd" style={isThemedColor(color) ? {color: 'white', fontSize: '24px', fontWeight: '500'} : {color: '#0d6efd', fontSize: '24px', fontWeight: '500'}}>Themes</Card.Title>
        <Card.Title className="txtsd" style={isThemedColor(color) ? {color: 'white', fontSize: '14px', fontWeight: '300'} : {color: '#0d6efd', fontSize: '14px', fontWeight: '300'}}>Choose a theme for this app</Card.Title>
      </Card>
      {Object.keys(themes).map((type) => (
        <Form.Check
          key={type}
          checked={themes[type] === color}
          className="tCap"
          type='radio'
          label={type}
          style={{margin: '15px', fontSize: '20px', fontWeight: '500'}}
          onChange={() => dispatch(changeTheme(themes[type]))}
          id={`default-${type}`}
        />))
      }
      <p>or</p>
      <Card.Title style={{color: 'black', fontSize: '14px', fontWeight: '800'}}>Pick a any color:</Card.Title>
      <br />
      <input type="color" id="themeColor" value={isThemedColor(color) ? "#000" : color} name="themeColor" onChange={e => {console.log(e.target.value); dispatch(changeTheme(e.target.value))}} />
    </div>
  );
}
