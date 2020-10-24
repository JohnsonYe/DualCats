/** Dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Redux store
import { Provider } from 'react-redux';
import store from './redux/store';

// Router
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)