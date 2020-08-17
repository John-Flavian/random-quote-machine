import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const headerStyles = makeStyles({
  headerStyle: {
    fontSize: '30px',
    padding: '5px',
    backgroundColor: 'inherit',
    textShadow: '0 0 3px white, 0 0 5px #0000ff',
    textAlign: 'center'
  },
  pStyle: {
    marginTop: '2%'
  }
})

function Header() {
    const classes = headerStyles()
    return(
        <div className={classes.headerStyle} >
            <Typography variant="h2">Random Quote Machine</Typography>
            <Typography variant="subtitle1" className={classes.pStyle}>...a freecodecamp project</Typography>
        </div>
    )
}

export default Header