import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout'
import {
    BrowserRouter as Router
} from "react-router-dom";
import Aux from './hoc/auxilliary/Auxilliary';

function App() {
    return (
        <Router>
            <Aux>
                <Layout></Layout>
            </Aux>
        </Router>
    );
}

export default App;
