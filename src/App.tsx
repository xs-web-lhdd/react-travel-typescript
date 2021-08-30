import React from 'react';
import styles from './App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login, Register, Detail } from './pages/index'


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/detail/:touristRoutedId' component={Detail}/>
          <Route render={() => (<h1>404 not found 页面去火星了！</h1>)}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
