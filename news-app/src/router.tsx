import * as React from 'react';
import App from './App';
// importing the other component webpages.
import AboutComponent from './components/AboutComponent'
import { Header } from './components/header';

// Usually in react webpages, everything is displayed as a single page.
// however if we want it to act like a normal page, we import
// react router.
import {BrowserRouter, Redirect, Route} from 'react-router-dom';

// global stylesheet
import './css/styles.css';


export const AppRouter: React.StatelessComponent<{}> = () => 
{
  return (
    // BrowserRouter: All components from react-router depend on BrowserRouter
    // to provide the browsers history api. (manage current webpage location)

    // Router: Is a component of react-router which makes sure that the page they
    // are on is the page displayed. It simulates a normal webpage structure even
    // though everything is written in the first page. If the current webpage URL
    // matches the path specified in Route, that component will be displayed.

    // e.g. homepage is App.tsx, AboutComponent url means AboutComponent.tsx is
    // exported and displayed
    <BrowserRouter>
      <div>
        <Header />
          <main>
            <Route exact = {true} path = "/" component = {App} />
            <Route path = "/AboutComponent" component = {AboutComponent} />
            <Redirect from='*' to='/' />
          </main>
      
      </div>
    </BrowserRouter>
  );
};
