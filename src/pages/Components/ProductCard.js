import styled from "styled-components";
export default function ProductCard(props) {
  const { id, name, price, description, image, type } = props;
  return (
    <>
      <ProductCardItem>
        <ItemImage src={image} alt="product" />
        <ItemInfo>
          <ItemName>{name}</ItemName>
          <ItemPrice>R$ {price}</ItemPrice>
        </ItemInfo>
      </ProductCardItem>
    </>
  )
}

const ProductCardItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #F5F5DC;
width: 20%;
height: 15rem;
padding: 1.5rem;
border-radius: 10px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
margin-bottom: 1rem;
@media screen and (max-width: 400px) {
 width: 100%;
}
`
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ItemImage = styled.img`
  width: 160px;
  height: 130px;
  border-radius: 3px;
`
const ItemName = styled.h3`
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
margin-bottom: 1rem;
`
const ItemPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
`