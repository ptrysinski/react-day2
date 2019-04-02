import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Calculators from './Calculators'
import Home from './Home'




const App = () => {
    return ( 
        <Router>
            <div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/">Calculators</Link>
                    </li>
                </ul>
            </div>

            <Route exact={true}  path={"/"} component={Home} />
            <Route exact={true} path={"/"} component={Calculators} />
        </Router>       
        
    )
}

export default App