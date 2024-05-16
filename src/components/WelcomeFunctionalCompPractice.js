import React from 'react';

// const Welcome = ({name, sportsName}) => {
//     return (
//         <div>
//             <h1>Hello I am {name}, I play {sportsName}</h1>
//         </div>
//     )
// }


const Welcome = (props) =>  {

     const {name, sportsName} = props;

    return (
        <div>
            <h1>Hello I am {name}, I play {sportsName}</h1>
        </div>
    )
}

export default Welcome;



