import React, {useState, useEffect } from 'react'
import Card from 'components/card'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { getProductList } from 'services/product'
import Error from 'components/error'
import ClipLoader from 'react-spinners/ClipLoader'

const StyledProductCategories = styled.div`
  background-color: rgb(245, 245, 245);
`

const StyledCardContainer = styled.div`
  padding: 8px;
  display: inline-block;
`

const StyledLoadMoreContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
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

const ProductCategories = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getProductList(page)
    .then(result => {
      setData([
        ...data,
        ...result.data
      ])
      setPage(result.paging.currentPage)
      setTotalPage(result.paging.totalPage)
    })
    .catch(error => {
      console.error('Error: ', error)
      setError('There are some errors! Please try again later!')
    })
    .finally(() => {
      setLoading(false)
    })
  }, [page])

  const getMoreProducts = () => {
    setPage(page + 1)
  }
  const history = useHistory()
  const redirect = (id) => {
    history.push(`/product/${id}`)
  }
  const cards = data && data.map(item => (
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
      <div className='content-container'>
        {error ? <Error></Error> :
          <>
          {cards}
          <StyledLoadMoreContainer>
            {page !== (totalPage - 1) ? 
            <>
              {!loading ? <StyledLoadMoreButton onClick={getMoreProducts}>Load More</StyledLoadMoreButton> : <ClipLoader color='#36D7B7'></ClipLoader>}
            </> : ''}
          </StyledLoadMoreContainer>
          </>}
      </div>      
    </StyledProductCategories>
  )
}

export default withRouter(ProductCategories)
