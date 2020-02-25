import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout'
import {
    BrowserRouter as Router
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Layout></Layout>
            </div>
        </Router>
    );
}

export default App;
