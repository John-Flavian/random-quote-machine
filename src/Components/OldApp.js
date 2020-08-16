import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import  Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import QuoteMachine from './Components/QuoteMachine';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
      bgColor: "blue"
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  /* 
  *Returns an integer representing an index in states.quote
  *If state.quotes is empty, returns undefined
  */


generateNewQuoteIndex() {
  if (!this.state.quotes.length) {
    return;
  } 
  return random(0, this.state.quotes.length - 1);
}

assignNewQuoteIndex() {
  this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex(), bgColor: "green" });
}


  render() {

    console.log(styles.container.backgroundColor);
    return(
    <Grid className={this.props.classes.container} id="quote-box"  justify="center" container>
      <Grid xs={11} lg={8} item>
        {
        this.selectedQuote ?
        <QuoteMachine 
            selectedQuote={this.selectedQuote} 
            assignNewQuoteIndex={this.assignNewQuoteIndex}
        
        />
        : null
      }
          
      </Grid>

     </Grid>
  );
}
}

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    backgroundColor: "blue"
  }
};

export default withStyles(styles)(App);


//use $npm start; to start the server