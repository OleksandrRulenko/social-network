import React from 'react';
import './App.css';
import Navbar from './components/NAVBAR/Navbar';
import News from './components/NEWS/News';
import Music from './components/MUSIC/Music';
import Settings from './components/SETTINGS/Settings';
import { Route, withRouter } from "react-router-dom";
import HeaderContainer from './components/HEADER/HeaderContainer';
import UsersContainer from './components/USERS/UsersContainer';
import LoginPage from './components/LOGIN/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './REDUX/app-reducer.js'
import Preloader from './components/COMMON/PRELOADER/Preloader';
import store from './REDUX/redux-store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './HOC/withSuspense';

//import DialogsContainer from './components/DIALOGS/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/DIALOGS/DialogsContainer'));
// import ProfileContainer from './components/PROFILE/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/PROFILE/ProfileContainer'));



class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return < Preloader />
    }

    return (
      <div className='app-wrapper'>

        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>

          {/* <Route path='/dialogs'
            render={() => {
              return <React.Suspense fallback={<Preloader />}>
                <DialogsContainer />
            </React.Suspense>
            }} /> */}
          <Route path='/dialogs'
            render={withSuspense(DialogsContainer)} />

          <Route path='/profile/:userId?'
            render={withSuspense(ProfileContainer)} />

          <Route path='/users'
            render={() => <UsersContainer />} />

          <Route path='/login'
            render={() => <LoginPage />} />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />

        </div>

        <footer className="footer">
          rulenko.com
        </footer>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const RulenkoApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default RulenkoApp;