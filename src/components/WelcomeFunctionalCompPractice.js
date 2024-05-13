import React from 'react';

const Welcome = (props) => {
console.log(props)
    return (
        <div>
            <h1>Hello I am {props.name}, I play {props.sportsName}</h1>
            {props.children}
        </div>
    )
}

export default Welcome;



