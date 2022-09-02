import React from 'react'
import  Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

var bg = 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%)';
const myStyles = makeStyles({
    container: {
      display: 'grid',
      bottom: '0',
      textAlign: 'center',
      backgroundColor: '#99b3ff',
      background: bg,
    }
})

function Footer() {
    const classes = myStyles();
    return(
        <Grid className={classes.container}
        >
            <Typography variant="p">
               <b> &copy; <a href="https://github.com/John-Flavian"> John Flavian</a> 2020.</b>
            </Typography>
            <Typography variant="subtitle2">
                View this code on <a href="https://github.com/John-Flavian/random-quote-machine"> GitHub.</a>
            </Typography>
        </Grid>
    )
}

export default Footer