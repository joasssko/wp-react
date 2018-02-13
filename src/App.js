import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import UserView from 'components/userView'
import PostList from 'components/postList'

import { Provider } from 'react-redux'
import configureStore from './store'

import { HashRouter, Route } from 'react-router-dom'

const View = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <UserView />
    <PostList />
  </div>
)

class App extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <HashRouter>
          <Route path="/" component={View} />
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
