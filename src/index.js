import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import { Provider } from 'react-redux';
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import { BtdServiceProvider } from "./btd-service-context";
import Btd_service from "./services/btd_service";
import { BrowserRouter as Router } from "react-router-dom";


const btdService = new Btd_service();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BtdServiceProvider value={btdService}>
                <Router>
                    <App/>
                </Router>
            </BtdServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
