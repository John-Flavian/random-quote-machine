import React, {useState, useEffect} from 'react';
import 'typeface-roboto';
import { random } from 'lodash';
import  Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import QuoteMachine from './Components/QuoteMachine';
import Header from './Components/Header'
import randomColor from 'randomcolor'

const myStyles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: 'auto',
    marginTop: '20vh'
  },
  app: {
    alignItems: 'center',
    height: '100vh',
    transition: 'background-color 2s ease',
    overflow: 'hidden'
  },
   
})


function App() {
  const classes = myStyles()
  const initRandNum = Math.floor(( Math.random() * 100) + 1)
//Sets a random number for the selectedQuoteIndex onload

  const [quotes, setQuotes] = useState([]) 
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(initRandNum)
  const [bgColor, setBgColor] = useState(randomColor)
  

    useEffect(() => {
      fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(response => response.json())
      .then(data => { setQuotes(data) })
    }, [])

    const generateNewQuoteIndex = !quotes.length ? null : random(0, quotes.length - 1)
     //gets a random number between 0 and the quotes array length

    function assignNewQuoteIndex() {
      return(
      setSelectedQuoteIndex(generateNewQuoteIndex),
      setBgColor(randomColor)
      )
    }
    //Assigns the random number to selectedQuotes
    //Changes the background-color too!
   
    const selectedQuote =
    !quotes.length || !Number.isInteger(selectedQuoteIndex) ? null
    : quotes[selectedQuoteIndex];
  //selects the random quote from the quotes array


  return (
    <div className={classes.app} style={{backgroundColor: bgColor}}>
      <Header />
      <Grid className={classes.container} id="quote-box"  justify="center" alignItems="center" container>
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
export default App