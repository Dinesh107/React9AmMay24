import React from 'react'

export const Child = () => {

    console.log('Child Rendering')

     return (
        <div>
            <h1>Child Component</h1>
        </div>
    )

}

export const MemoizedChild = React.memo(Child)



