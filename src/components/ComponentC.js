import React from 'react'
import { UserContext } from '../App'

function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return <div>
                        User Context Data {user}
                    </div>
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC