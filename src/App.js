import React from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
// import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import Scene from './container/scene';
import Music from './container/music';
import './app.css';
import './index.css';
import menu_background from './images/menu.jpg';
const history = createHashHistory();
const Home = () => (
  <div className="App" id="webvn">
    <div className="center">
      <div
        className="fill"
        id="menu"
        style={{
          display: 'block',
          opacity: 1,
          background: `url(${menu_background}) no-repeat`
        }}
      >
        <ul className="main-ui">
          <Link to="/scene">
            <li className="start">开始</li>
          </Link>
          <li className="load">读取</li>
          <li className="cg">画廊</li>
          <Link to="/music">
            <li className="music">音乐</li>
          </Link>

          <li className="setting">设置</li>
        </ul>
      </div>
    </div>
  </div>
);
const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/scene" component={Scene} />
      <Route path="/music" component={Music} />
      <Redirect to="/home" />
    </Switch>
  </Router>
);

export default App;
