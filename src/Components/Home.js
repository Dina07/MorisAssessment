
import React from "react";
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";
import {Button, Card} from 'react-bootstrap';
import {isThemedColor} from "./Utilis";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const color = useSelector((state) => state.theme.value)
  return (
    <React.Fragment>
      <div className="pad15">
        <Card border={color} order={color} style={isThemedColor(color) ? {} : {border: '1px solid' + color}}>
          <Card.Body>Good Day !!. {new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}</Card.Body>
        </Card>
        <div className="flex-row-wrap padTop15">
          {['profile', 'table', 'settings'].map(route => (
            <Card border={color} order={color} style={isThemedColor(color) ? {width: '18rem'} : {border: '1px solid' + color, width: '18rem'}} key={route}>
              <Card.Body>
                <Card.Title className="tCap">{route}</Card.Title>
                <Card.Text>
                  Component are available here !
                </Card.Text>
                <NavLink to={{pathname: `${route}`}}>
                  <Button className="txtsd" variant={color} style={!isThemedColor(color) ? {backgroundColor: color, color: '#0d6efd', border: "1px solid" + color} : {color: "#0d6efd"}}>Go to {route} component!!</Button>
                </NavLink>

              </Card.Body>
            </Card>
          ))
          }
        </div>
      </div>
    </React.Fragment >
  );
}
