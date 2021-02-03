import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import StarRatings from 'react-star-ratings'

const StyledImageContainer = styled.div`
  width: 189px;
  height: 189px;
  img {
    width: 100%;
    height: 100%;
  }
`

const StyledCardContainer = styled.div`
  background: white;
  width: 189px;
  height: 316px;
  display: inline-block;
  padding: 8px;
  overflow: hidden;
  &:hover {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
    cursor: pointer;
  }
`

const StyledCardTitle = styled.div`
  height: 36px;
  line-height: 19px;
  font-size: 14px;
  color: #212121;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledMallContainer = styled.div`
  height: 14px;
`

const StyledPriceContainer = styled.div`
  margin-top: 4px;
`

const StyledOriginalPriceContainer = styled.div`
  line-height: 22px;
  height: 22px;
  font-size: 18px;
  color: #ff330c;
`

const StyledCurrencyContainer = styled.span`
  font-size: 12px;
  line-height: 22px;
`

const StyledOriginalPrice = styled.div`
  font-size: 14px;
  line-height: 12px;
  color: #9e9e9e;
`

const StyledDiscountPercent = styled.span`
  margin: 0 4px;
  opacity: 0.8;
  text-decoration: none;
`

const StyledDiscounPriceContainer = styled.span`
  text-decoration: line-through;
`

const StyledReviews = styled.span`
  font-size: 12px;
  color: #9e9e9e;
  margin-left: 2px;
`

const StyledRegion = styled.span`
  max-width: 74px;
  text-overflow: ellipsis;
  text-align: right;
  font-size: 12px;
  color: #9e9e9e;
  height: 14px;
  float: right;
  line-height: 20px;
`

const StyledReviewRegion = styled.div`
  margin-top: 8px;
  height 20px;
`

const Card = ({ imgSrc, title, price, originalPrice, currency, discount, rating, reviews, region }) => {

  return (
    <StyledCardContainer>
      <StyledImageContainer>
        <img src={imgSrc}></img>
      </StyledImageContainer>
      <StyledMallContainer></StyledMallContainer>
      <StyledCardTitle>
        <span>{title}</span>
      </StyledCardTitle>
      <StyledPriceContainer>
        <StyledOriginalPriceContainer>
          <StyledCurrencyContainer>{currency}</StyledCurrencyContainer>
          <span>{price}</span>
        </StyledOriginalPriceContainer>
      </StyledPriceContainer>
      <StyledOriginalPrice>
        <StyledDiscounPriceContainer>
          <StyledCurrencyContainer>{currency}</StyledCurrencyContainer>
          <span>{originalPrice}</span>
        </StyledDiscounPriceContainer>
        <StyledDiscountPercent>-{discount}</StyledDiscountPercent>
      </StyledOriginalPrice>
      <StyledReviewRegion>
        {rating !== 0 ? <StarRatings
          rating={rating}
          starRatedColor="rgb(250, 202, 81)"
          starDimension="12px"
          starSpacing="4px"
        ></StarRatings> : ''}
        {reviews > 0 ? <StyledReviews>({reviews})</StyledReviews> : ''}
        {region ? <StyledRegion>{region}</StyledRegion> : ''}
      </StyledReviewRegion>
    </StyledCardContainer>
  )
}

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  originalPrice: PropTypes.string,
  currency: PropTypes.string,
  discount: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  region: PropTypes.string
}

export default Card
