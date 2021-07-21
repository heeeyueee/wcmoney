import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter,

} from 'react-router-dom';
import Home from 'views/Home';
import Detail from 'views/Detail';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';
import styled from 'styled-components';
import store from './store'
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import Profile from 'components/auth/Profile';
import Auth from './components/auth/auth';
import Money from './views/Home/Money/index';

const AppWrapper = styled.div`
max-width: 520px;
margin: 0 auto;

`;

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Router>
          <Switch>
            <Route exact path={["/", "/auth"]} component={Auth} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/money" component={Money} />
            <Route path="/detail" component={Detail} />
            <Route path="/statistics" component={Statistics} />
            {/* <Redirect exact from="/" to="/home" /> */}
            <Route path="*" component={NoMatch} />
          </Switch>
        </Router>
      </AppWrapper>
    </Provider>
  );
}

export default withRouter(App);;