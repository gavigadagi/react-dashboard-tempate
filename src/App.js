import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './App.scss';


// Containers
const Layout = React.lazy(() => import('./components/Layout'));

// Pages
const Login = React.lazy(() => import('./components/pages/Login'));
const Register = React.lazy(() => import('./components/pages/Register'));
const Page404 = React.lazy(() => import('./components/pages/Page404'));
const Page500 = React.lazy(() => import('./components/pages/Page500'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  return (
    <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <Layout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
  );
}

export default App;
