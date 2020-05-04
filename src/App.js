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
import AnswersPage from './containers/AnswersPage/AnswersPage.js';
import UserProfile from './containers/UserProfile/UserProfile';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  token = localStorage.getItem('token');
  
  state = {
    loggedIn: null
  }

  componentDidMount(){
    if(this.token !== null){
      this.setState({
        ...this.state,
        loggedIn: true
      });
    }
  }

  render() {

      let routes = (
        <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup" component={Auth} />
        <Route path="/login" component={Login} />
      </Switch>
      );
      
      if(this.state.token !== null){ // replace with this.props.loggedIn
        console.log('/inside if');
        routes = (
          <Switch>
            {/* <Redirect from='/' to='/home' /> */}
          <Route path="/home" component={HomePage} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" component={Auth} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/add/question" component={AddQuestion} />
          <Route path='/question/:questionId/answer/:id/add/comment' exact component={AddComment}/>
          <Route path="/question/:id/add/answer" exact component={AddAnswer} />
          <Route path="/question/:id" component={QuestionPage} />
          <Route path="/userprofile/:id" exact component={UserProfile} />
          <Route path="/:id/answers" exact component={AnswersPage} />
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
