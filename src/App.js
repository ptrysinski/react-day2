import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Calculators from './views/Calculators'
import Home from './views/Home'
import DisplayName from './views/DisplayName'
import MUIPlayground from './Views/MUIPlayground';
import Navigation from './Views/Navigation';

const App = () => {
    return (
        <Router>
            <Navigation />
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/calculators">Calculators</Link>
                    </li>
                    <li>
                        <Link to="/MUI">MUI Playground</Link>
                    </li>
                </ul>
            </div>
            <Route exact={true} path={'/'} component={Home} />
            <Route path={'/calculators'} component={Calculators} />
            <Route path={'/display-name/:firstname?/:lastname?'} component={DisplayName} />
            <Route path={'/MUI'} component={MUIPlayground} />
        </Router>
    )
}

export default App