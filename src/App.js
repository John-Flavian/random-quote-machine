import React, {useState, useEffect} from 'react';
// import { random } from 'lodash';
import 'typeface-roboto';
import { random } from 'lodash';
import  Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import QuoteMachine from './Components/QuoteMachine';



function App() {
const initRandNum = Math.floor(( Math.random() * 100) + 1)
//Sets a random number for the selectedQuoteIndex onload

  const [quotes, setQuotes] = useState([]) 
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(initRandNum)

    useEffect(() => {
      fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(response => response.json())
      .then(data => { setQuotes(data) })
    }, [])

    const generateNewQuoteIndex = !quotes.length ? null : random(0, quotes.length - 1)
     //gets a random number between 0 and the quotes array length

    function assignNewQuoteIndex() {
      return(
      setSelectedQuoteIndex(generateNewQuoteIndex)
      )
    }
    //Assigns the random number to selectedQuotes
   
    const selectedQuote =
    !quotes.length || !Number.isInteger(selectedQuoteIndex) ? null
    : quotes[selectedQuoteIndex];
  //selects the random quote from the quotes array


  return (
    <div>
      <h1>Hello World!</h1>
      <Grid id="quote-box"  justify="center" container>
      <Grid xs={11} lg={8} item>
       
      {
        selectedQuote ?
        <QuoteMachine 
            selectedQuote={selectedQuote} 
            assignNewQuoteIndex={assignNewQuoteIndex}
        />
        : null
      }
      </Grid>
      </Grid>
    </div>
  )

}

// const styles = {
//   container: {
//     alignItems: 'center',
//     display: 'flex',
//     height: '100vh',
//     backgroundColor: "blue"
//   }
// };

export default (App);


//use $npm start; to start the server