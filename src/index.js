import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ProductCategories from './pages/product_categories'
import ProductDetail from './pages/product_detail'
import data from './services/mockData.json'
import styled from 'styled-components'
import './style.scss'
 
const title = 'Lazada simple application';

const StyledTitle = styled.h1`
  text-align: center;
`

const App = () => (
  <Router>
     <StyledTitle>{title}</StyledTitle>
     <Switch>
      <Route path="/product/:id">
        <ProductDetail/>
      </Route>
      <Route path="/">
        <ProductCategories data={data.data.resultValue[201711102]}/>
      </Route>
    </Switch>
  </Router>
)
ReactDOM.render(<App/>, document.getElementById('app'));
 