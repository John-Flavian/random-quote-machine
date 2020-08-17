import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



function QuoteMachine(props) { 
    return (
    <Card>
        <CardContent>
            <Typography id="text">
                {props.selectedQuote.quote} - <span id="author">{props.selectedQuote.author}</span>
            </Typography>
        </CardContent>
    
<CardActions>
    <Button id="new-quote" size="small" onClick={props.assignNewQuoteIndex} variant="outlined"> Next Quote </Button>
    <IconButton
    id="tweet-quote"
    target="_blank"
    href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hashtags=johnflavian'srqm`)}
    >
        <FontAwesomeIcon icon={faTwitter}>

        </FontAwesomeIcon>
    </IconButton>
    </CardActions>
    </Card>

    /* alternative way of writing React.fragment is <>  and  </> */
)}

export default QuoteMachine;