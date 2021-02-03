import React from 'react'
import Card from '../components/card'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const StyledProductCategories = styled.div`
  background-color: rgb(245, 245, 245);
`

const CardsContainer = styled.div`
  margin: 0 auto;
  @media only screen and (max-width: 687px) {
    width: 230px;
  }

  @media only screen and (min-width: 688px) and (max-width: 991px) {
    width: 672px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1311px) {
    width: 893px;
  }

  @media only screen and (min-width: 1312px) {
    width: 1114px;
  }
`

const StyledCardContainer = styled.div`
  padding: 8px;
  display: inline-block;
`

const StyledLoadMoreContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 9px;
`

const StyledLoadMoreButton = styled.button`
  margin: 0 auto;
  display: block;
  width: 387px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #1a9cb8;
  border: 1px solid #1a9cb8;
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const ProductCategories = ({ data }) => {
  const history = useHistory()
  const redirect = (id) => {
    history.push(`/product/${id}`)
  }
  const cards = data.data.map(item => (
    <StyledCardContainer key={item.itemId}>
      <Card imgSrc={item.itemImg}
        title={item.itemTitle}
        price={item.itemDiscountPrice}
        originalPrice={item.itemPrice}
        discount={item.itemDiscount}
        rating={item.itemRatingScore}
        reviews={item.itemReviews}
        region={item.itemRegion}
        url={item.itemUrl}
        currency={item.currency}
        id={item.itemId}
        handleClick={redirect}
        ></Card>
    </StyledCardContainer>
  ))

  return (
    <StyledProductCategories>
      <CardsContainer>
        {cards}
      </CardsContainer>
      <StyledLoadMoreContainer>
        <StyledLoadMoreButton>Load More</StyledLoadMoreButton>
      </StyledLoadMoreContainer>
    </StyledProductCategories>
  )
}

ProductCategories.propTypes = {
  data: PropTypes.object
}

export default ProductCategories