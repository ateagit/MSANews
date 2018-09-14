import * as React from 'react';
import './App.css';
//Usually in react webpages, everything is displayed as a single page.
//however if we want it to act like a normal page, we import
//react router.
import {BrowserRouter, Redirect, Route} from 'react-router-dom';

//importing the other component webpages.
import AboutComponent from './components/AboutComponent'
import { Header } from './components/Header';
import logo from './logo.svg';
//a global stylesheet
import './css/styles.css';

/*
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
const AppRouter: React.StatelessComponent<{}> = () => 
{
  return (
    //BrowserRouter: All components from react-router depend on BrowserRouter
    //to provide the browsers history api. (manage current webpage location)

    //Router: Is a component of react-router which makes sure that the page they
    //are on is the page displayed. It simulates a normal webpage structure even
    //though everything is written in the first page. If the current webpage URL
    //matches the path specified in Route, that component will be displayed.
    <BrowserRouter>
      <div>
        <Header>
          <main>
             
            <Route exact = {true} path = "/" component = {App} />
            <Route path = "/AboutComponent" component = {AboutComponent} />
            <Redirect from='*' to='/' />
          </main>
        </Header>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;



