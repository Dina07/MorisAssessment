import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import './App.css'
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Setting from "./Components/Settings";
import Table from "./Components/Table";
import {Card} from "react-bootstrap";
import {isThemedColor} from "./Components/Utilis";

const localRoutes = [
  {
    path: "/home",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/profile",
    main: () => <Profile />
  },
  {
    path: "/table",
    main: () => <Table />
  },
  {
    path: "/settings",
    main: () => <Setting />
  }
];

function App() {
  const color = useSelector((state) => state.theme.value)
  React.useEffect(() => {
    if (document.getElementById("sidebar")) {
      document.getElementById("sidebar").style.backgroundColor = color;
      document.getElementById("sidebar").style.textShadow = '2px 2px 5px #ff0000';
    }
  }
    , [color])
  return (
    <Router>
      <div style={{display: "flex"}}>
        <div id='sidebar' className={`sidebar sideBg${color}`}>
          <ul style={{listStyleType: "none", padding: 0}}>
            {['home', 'profile', 'table', 'settings'].map((route, i) => (
              <Card.Title key={route + i}>
                <Link to={route} className='tCap link'>{route}</Link>
              </Card.Title>
            ))
            }
          </ul>
        </div>

        <div style={{flex: 1, padding: "10px"}}>
          <Switch>
            <Route exact path="/" render={() => {return (<Redirect to="/home" />)}}></Route>
            {localRoutes.map((route, index) => (
              <Route
                key={index} path={route.path}
                exact={route.exact} children={<route.main />}
                render={route.main}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
