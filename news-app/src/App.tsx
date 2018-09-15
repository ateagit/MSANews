

// from MATERIAL UI

 import { CardActionArea } from '@material-ui/core';

 import Button from '@material-ui/core/Button'
 
import Card from '@material-ui/core/Card'

 import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
 import Typography from '@material-ui/core/Typography'

import * as React from 'react';


import './App.css';

// import image from './css/1423500.jpg'


interface IState
{
  success: any,
  results: any

}
class App extends React.Component <{}, IState> {

  constructor(props: any)
  {
    super(props)
    this.state = {
      
      results: "",
      success: false
    }
    
    this.CardCreator = this.CardCreator.bind(this)
  }
  public fetchNews(country: string)
  {
    const url = 'https://newsapi.org/v2/top-headlines?' +
    'country='+country+'&' +
    'apiKey=3ce0f3693907405c934104cfa0ba8ded';
    
    fetch(url, {
      headers: {
        'Content-Type': 'text/plain',
      },
      method: 'GET'
    }).then(res => res.json())
    .then(
      (result) => {
        if(!result.ok)
        {
          this.setState({
            results: result,
            success:true
          });
        }
        else
        {
          this.setState({
            results: result,
            success: true
          });
        }
      })
  }

  public CardCreator()
  {
    // This function takes the JSON object and formats it into a Card container.
    // Since there is more than one article, we use a map() function to map each article to a container
    // List of friend objects
    
    const keys = ["articles", "source", "id", "name", "author", "title", "description", "url", "urlToImage", "publishedAt"];
   
    const articleList = this.state.results[keys[0]];
    
    const listCardArticles = articleList.map((article: any) =>
      // publishedAt is the key
      <Card className = 'card' key = {article[keys[9]].toString()}>
        <CardHeader title = {article[keys[5]]} subheader = {article[keys[4]]}/ >

        <CardActionArea href = {article[keys[7]]}>
          <CardMedia className= "pic" image= {article[keys[8]]} title="url"/>

          <CardContent>
            <Typography component = "p" variant="headline">
              {
                article[keys[6]] === null ? "No description available" : article[keys[6]]
              }
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="primary" href = {article[keys[7]]}>
            Learn More
            </Button>
          </CardActions>
      </Card>
    );
    return listCardArticles;
    
  }


  public render() {
    // () => this.func() allows parameters to be passed in by using a arrow function. It calls arrow function which calls the function with
    // parameters
    if(this.state.success === false)
    {
      return (
        <div className="App">
          <header className="App-header">
            <h1> News </h1>
          </header>
          <h2> Powered by NewsAPI.org </h2>
          
          <div className = "Button-drawer">
          <h3>
            Please choose a Country to get Top Headlines from
          </h3>
            <Button variant="outlined"  color="primary" onClick = {() => this.fetchNews("us")} > American News </Button>
            <Button variant="outlined"  color="primary" onClick = {() => this.fetchNews("br")} > British News </Button>  
            <Button variant="outlined"  color="primary" onClick = {() => this.fetchNews("nz")} > New Zealand News </Button>  
          </div>
          
        </div>
      );
    }
    else{
      return (

        <div className="App">
          <header className="App-header">
            
          <h1> News</h1>
          </header>
          <h2> Powered by NewsAPI.org {this.state.success} </h2>
          <h3>
            Choose a different country?
          </h3>
         
          <div className = "Button-drawer">
            <Button variant="outlined"  color="primary" onClick = {() => this.fetchNews("us")} > American News </Button>
            <Button variant="outlined"  color="primary" onClick = {() => this.fetchNews("br")} > British News </Button>  
            <Button variant="outlined"  color="primary" onClick = {() => this.fetchNews("nz")} > New Zealand News </Button>    
          </div> 
         
          <Grid container = {true} justify = "center">
          {
            
            this.state.results === "" ?   <LinearProgress />:  <this.CardCreator />
           
          }
          </Grid>
        </div>
      )
    }
  }
  }
  
export default App;


