import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import ClipLoader from 'react-spinners/ClipLoader'
import { useParams } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import { getProductDetail } from 'services/product'
import Error from 'components/error'

const StyledImageContainer = styled.div`
  display: inline-block;
  width: 330px;
  height: 330px;
  img {
    width: 100%;
    height: 100%;
  }
  margin-right: 20px;
  cursor: pointer;
`

const StyledProductContainer = styled.div`
  background-color: rgb(239, 240, 245);
  width: 100%;
  display: inline-block;
  padding: 8px;
  overflow: hidden;
`

const StyledProductDetailContainer = styled.div`
  background: white;
`

const StyledProductInfoWrapper = styled.div`
  display: inline-block;
  width: calc(100% - 350px);
  box-sizing: border-box;
  vertical-align: top;
`

const StyledProductTitle = styled.div`
  line-height: 19px;
  font-size: 14px;
  color: #212121;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 20px;
  border-bottom: 1px solid #eff0f5;
`

const StyledProductDiscountPrice = styled.div`
  line-height: 30px;
  font-size: 30px;
  color: #f57224;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 20px;
`

const StyledProductPriceWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #eff0f5;
  white-space: pre-wrap;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledProductPrice = styled.div`
  display: inline;
  line-height: 19px;
  font-size: 14px;
  text-decoration: line-through;
  color: #9e9e9e;
  margin-right: 10px;
`

const StyledProductPricePercent = styled.div`
  display: inline;
  line-height: 19px;
  font-size: 14px;
  color: #333;
`

const StyledReviewRating = styled.div`
  margin-top: 8px;
  height 20px;
`

const StyledReviews = styled.span`
  font-size: 12px;
  color: #9e9e9e;
  margin-left: 2px;
`

const ProductDetail = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProductDetail(id)
      .then(result => {
        setData(result)
        setError('')
      })
      .catch(error => {
        console.error('Error: ', error)
        setError('There are some errors! Please try again later!')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <StyledProductContainer>
      <StyledProductDetailContainer className='content-container'>
        {!loading ? error ? <Error></Error> :
        <>
          <StyledImageContainer>
            <LazyLoad width={300} height={300}>
              <img src={data.itemImg} alt='product-image'></img>
            </LazyLoad>
          </StyledImageContainer>
          <StyledProductInfoWrapper>
            <StyledProductTitle>
              <h2>{data.itemTitle}</h2>
            </StyledProductTitle>
            <StyledReviewRating>
              {data.itemRatingScore !== 0 ? (
                <StarRatings
                  rating={data.itemRatingScore}
                  starRatedColor='rgb(250, 202, 81)'
                  starDimension='12px'
                  starSpacing='4px'
                ></StarRatings>
              ) : (
                ''
              )}
              {data.itemReviews > 0 ? (
                <StyledReviews>{`${data.itemReviews} Ratings`})</StyledReviews>
              ) : (
                ''
              )}
            </StyledReviewRating>
            <StyledProductDiscountPrice>
              <span>
                {data.currency}{data.itemDiscountPrice}
              </span>
            </StyledProductDiscountPrice>
            <StyledProductPriceWrapper>
              <StyledProductPrice>
                <span>
                  {data.currency}{data.itemPrice}
                </span>
              </StyledProductPrice>
              <StyledProductPricePercent>
                <span>-{data.itemDiscount}</span>
              </StyledProductPricePercent>
            </StyledProductPriceWrapper>
          </StyledProductInfoWrapper>
          </> : <ClipLoader color='#36D7B7'></ClipLoader>}
      </StyledProductDetailContainer>
    </StyledProductContainer>
  )
}

export default withRouter(ProductDetail)
