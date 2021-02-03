import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
const ProductCategories = lazy(() => import('./pages/product_categories'))
const ProductDetail = lazy(() => import('./pages/product_detail'))
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
     <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/product/:id">
          <ProductDetail/>
        </Route>
        <Route path="/">
          <ProductCategories data={data.data.resultValue[201711102]}/>
        </Route>
      </Switch>
    </Suspense>
  </Router>
)
ReactDOM.render(<App/>, document.getElementById('app'));
 