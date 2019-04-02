import React from 'react'
import DisplayPassedName from './DisplayPassedName'

const Header = () => {

   return(
            <div>
                Nazywam się
                <DisplayPassedName 
                name = 'Piotr Trysiński'/>
            </div>
    )
}

export default Header