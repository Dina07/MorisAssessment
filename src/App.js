import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import './App.css'
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Setting from "./Components/Settings";
import Table from "./Components/Table";
import {Card} from "react-bootstrap";

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
  console.log('color on app', color)
  return (
    <Router>
      <div style={{display: "flex"}}>
        <div className={"sidebar-" + color}>
          <ul style={{listStyleType: "none", padding: 0}}>
            {['home', 'profile', 'table', 'settings'].map((route) => (
              <Card.Title>
                <Link to={route} className='tCap link'>{route}</Link>
              </Card.Title>
            ))
            }
          </ul>
        </div>

        <div style={{flex: 1, padding: "10px"}}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (

                  <Redirect to="/home" />

                )
              }}></Route>
            {localRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
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
