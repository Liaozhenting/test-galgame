import React, { Component } from 'react';
import './app.css';
import './index.css';
import menu_background from './images/menu.jpg';
class App extends Component {
  render() {
    return (
      <div className="App"
        id="webvn"
      >
        <div className="center">
          <div
            className='fill'
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
  }
}

export default App;
