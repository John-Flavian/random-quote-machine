import React from 'react'
import  Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function Footer() {
    return(
        <Grid
  container
  direction="row"
  justify="flex-end"
  alignItems="flex-end"
>
<Typography variant="subtitle1">
    View this code on GitHub.
</Typography>

</Grid>
    )
}

export default Footer