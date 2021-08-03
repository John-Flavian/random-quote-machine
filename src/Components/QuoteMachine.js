import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

 

var bg = 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%)';

const styles = makeStyles({
    cardStyle: {
        backgroundColor: 'inherit',
        borderRadius: '10px',
        background: bg,
        boxShadow: '0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6)'
    }
  })

function QuoteMachine(props) { 
   const classes = styles(); 

   return ( 
    <Card variant="outlined" className={classes.cardStyle}>
        <CardContent id="text">
               <Typography variant="h6">{props.selectedQuote.quote}</Typography> 
            <Typography id="author-container">
                <span id="author">_{props.selectedQuote.author}</span>
            </Typography>
        </CardContent>
    
<CardActions>
    <Button id="new-quote" size="small" onClick={props.assignNewQuoteIndex} variant="outlined"> Next Quote </Button>
    <IconButton
    id="tweet-quote"
    target="_blank"
    href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hashtags=johnflavian'srqm`)}
    >
        <FontAwesomeIcon variant="outlined" icon={faTwitter}>

        </FontAwesomeIcon>
    </IconButton>
    </CardActions>
    </Card>

    /* alternative way of writing React.fragment is <>  and  </> */
)}

export default QuoteMachine;