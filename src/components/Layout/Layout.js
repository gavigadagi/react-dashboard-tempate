import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import { Container } from 'reactstrap';

import './Layout.scss';
import History from '../pages/History/History';
import ErrorBoundary from './../Shared/ErrorBoundary/ErrorBoundary';

const Charts = React.lazy(() => import('./../pages/Charts/Charts'));
const Dashboard = React.lazy(() => import('./../pages/Dashboard/Dashboard'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Layout = (props) => {
    return (
        <div className="Layout">
            <Header className="header-component" />
            <Sidebar className="sidebar-component" />
            <div className="main">
                <Container fluid>
                    <ErrorBoundary>
                        <React.Suspense fallback={loading()}>
                            <Switch>
                                <Route path="/charts" name="Charts" render={props => <Charts {...props} />} />
                                <Route path="/dashboard" name="Dashboard" render={props => <Dashboard {...props} />} />
                                <Route path="/history" name="History" render={props => <History {...props} />} />
                                <Route path="/" name="Dashboard" render={props => <Dashboard {...props} />} />
                            </Switch>
                        </React.Suspense>
                    </ErrorBoundary>
                </Container>
            </div>
            <Footer className="footer-component" />
        </div>
    );
}

export default Layout;