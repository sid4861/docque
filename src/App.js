import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.js';
import Auth from './containers/Auth/Auth.js';
import Login from './containers/Auth/Login/Login.js';
import HomePage from './containers/HomePage/HomePage.js';
import Logout from './containers/Auth/Logout/Logout.js';
import AddQuestion from './containers/AddQuestion/AddQuestion.js';
import AddAnswer from './containers/AddAnswer/AddAnswer.js';
import AddComment from './containers/AddComment/AddComment.js';
import QuestionPage from './containers/QuestionPage/QuestionPage.js';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  render() {

      let routes = (
        <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup" component={Auth} />
        <Route path="/login" component={Login} />
      </Switch>
      );
      
      if(true){ // replace with this.props.loggedIn
        routes = (
          <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" component={Auth} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/add/question" component={AddQuestion} />
          <Route path='/question/:questionId/answer/:id/add/comment' component={AddComment}/>
          <Route path="/question/:id/add/answer" exact component={AddAnswer} />
          <Route path="/question/:id" component={QuestionPage} />
          
        </Switch>
        );
      }
    return (
      <div className="App">
        {routes}
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return ({
    loggedIn: state.login.loggedIn
  });
};

export default connect(mapStateToProps, null)(App);
