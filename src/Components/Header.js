import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const headerStyles = makeStyles({
  headStyle: {
    color: "blue"
  } 
})

function Header() {
    const classes = headerStyles()
    return(
        <div className={classes.headStyle} >
            <header>Random Quote Machine</header>
            <p>...a freecodecamp project</p>
        </div>
    )
}

export default Header