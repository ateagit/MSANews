import Grid from '@material-ui/core/Grid';
import * as React from 'react';
// import { Button, ButtonToolbar } from 'react-bootstrap';
// import Loader from 'react-loader-spinner'

import './App.css';


interface IState
{
  button: any,
  success: any,
  results: any

}
class App extends React.Component <{}, IState> {

  constructor(props: any)
  {
    super(props)
    this.state = {
      button: this.LiterallyNothing.bind(this),
      results: "",
      success: false
    }
    this.LiterallyNothing = this.LiterallyNothing.bind(this)
  }
  public LiterallyNothing() 
  {
    fetch('https://randomuser.me/api/', {
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
          
            results: result.results,
            success:true
          });
        }
        else
        {
          this.setState({
          
            results: result.results,
            success: true
          });
        }
      })
    .then((res : any) => {
      if (!res.ok) {
        this.setState({results: res})
        this.setState({success: "true"})
      }
      else {
        this.setState({results: res})
        this.setState({success: "true"})
      }
})
  }
  public fetchNews(countryName: string)
  {
    const url = 'https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=3ce0f3693907405c934104cfa0ba8ded';

    fetch(url, {method: 'GET'}).then((response: any) =>
    {
      this.setState({success: true});
      this.setState({results: response});
    })
  }
  /*
  public render() {
    if(this.state.success === false)
    {
      return (
        <div className="App">
          <header className="App-header">
            
            <h1 className="App-title">Welcome to Alan's News for MSA</h1>
          </header>
          <h1> News {this.state.success}</h1>
          
          <ButtonToolbar>
            <Button bsStyle="primary" onClick = {this.LiterallyNothing} > Click Me </Button> 
          </ButtonToolbar>;

          {
            this.state.results === "" ?   <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>:  <p>{this.state.results}</p>
          }
          
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <header className="App-header">
            
            <h1 className="App-title">SDFSDFSDF</h1>
          </header>
          <h1> News {this.state.success}</h1>
          
          <ButtonToolbar>
            <Button bsStyle="primary" onClick = {this.LiterallyNothing} > Click sdfsdfsdf </Button> 
          </ButtonToolbar>

          {
            this.state.results === "" ?   <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>:  <p>{JSON.stringify(this.state.results)}</p>
          }
          
        </div>
      )
    }
  }*/
  
  public render() {
    return(
      <Grid container className="Wrapper" spacing = {16}>
        <Grid  item xs={12}>
          <h1 className="App-title">Welcome to Alan's News for MSA</h1>
        </Grid>
      </Grid>
    );
  }
}




export default App;


