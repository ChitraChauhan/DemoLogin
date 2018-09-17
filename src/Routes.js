import React from 'react';
import App from './App';
import Login from './components/Login';
import Registration from './components/registration';
import Dashboard from './components/dashboard';
import Error404 from './components/notFound';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

class Routes extends React.Component {
    render() {
        return(
            <div>
                 <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Login}/>
                        <Route path="/register" component={Registration} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route component={Error404} />
                    </Route>
                </Router>
            </div>
        )}
}
export default Routes