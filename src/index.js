import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import styled from 'styled-components'
import 'style.scss'

const StyledTitle = styled.h1`
  text-align: center;
`

const title = 'Lazada simple application'
const ProductCategories = lazy(() => import('./pages/product_categories'))
const ProductDetail = lazy(() => import('./pages/product_detail'))

const App = () => (
  <Router>
     <StyledTitle>{title}</StyledTitle>
     <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/product/:id">
          <ProductDetail/>
        </Route>
        <Route exact path="/">
          <ProductCategories/>
        </Route>
      </Switch>
    </Suspense>
  </Router>
)
ReactDOM.render(<App/>, document.getElementById('app'))
