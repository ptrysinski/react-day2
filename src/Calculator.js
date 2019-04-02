import React from 'react'
import Add from './Add'
import Abstract from './Abstract'
import Multiply from './Multiply'
import Divide from './Divide';

const Calculator = (props) => {
    return (
        <div>Liczby to: {props.a}, {props.b}
        
            <Add
            a = {props.a}
            b = {props.b}
            />

            <Abstract
            a = {props.a}
            b = {props.b}
            />
            
            <Multiply
            a = {props.a}
            b = {props.b}
            />

            <Divide
            a = {props.a}
            b = {props.b}
            />

        </div>
    )

}

export default Calculator