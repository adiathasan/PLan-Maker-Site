import React, { Component } from 'react';
import Nav from './components/layout/navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import PlanDetail from './components/project/planDetails'
import CreatePlan from './components/project/createPlan'
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'


class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/plan/:id' component={PlanDetail}/>
            <Route path='/login' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/createPlan' component={CreatePlan}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
