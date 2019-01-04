import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import Scene from './container/scene';
import './app.css';
import './index.css';
import menu_background from './images/menu.jpg';
const history = createHashHistory();
class App extends Component {
  render() {
    const Home = (
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
            <ul>
              <li className="start">开始</li>
              <li className="load">读取</li>
              <li className="cg">画廊</li>
              <li className="music">音乐</li>
              <li className="setting">设置</li>
            </ul>
          </div>
        </div>
      </div>
    );
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" render={() => Home} />
          <Route path="/scene" render={() => Scene} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
