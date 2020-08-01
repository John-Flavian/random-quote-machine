import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



const QuoteMachine = (props) => (
    <Card>
        <CardContent>
            { 
        props.selectedQuote ? 
        (
            <Typography>
                {props.selectedQuote.quote} - {props.selectedQuote.author}
            </Typography>
        ) : null
        }    
        </CardContent>
    
<CardActions >
    <Button size="small" onClick={props.assignNewQuoteIndex}> Next Quote </Button>
    <IconButton>
        <FontAwesomeIcon icon={faTwitter}>

        </FontAwesomeIcon>
    </IconButton>
    </CardActions>
    </Card>

    /* alternative way of writing React.fragment is <>  and  </> */
);

export default QuoteMachine;