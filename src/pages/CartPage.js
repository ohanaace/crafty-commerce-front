import styled from "styled-components";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import {FaTrash, FaShoppingCart} from "react-icons/fa";

export default function CartPage() {
  return (
    <Container>
      <CartTitle>Meu Carrinho</CartTitle>

      <ProductsContainer>

        <Products>

            <CartContainer>
                <CartItem>
                <ItemImage src="https://via.placeholder.com/150x150" alt="Product image" />
                <ItemInfo>
                    <ItemName>Hidratante corporal c/ manteiga de karité</ItemName>
                    <ItemPrice>R$ 34,90</ItemPrice>
                    <QuantityControl>
                    
                    <PlusIcon />
                    
                    <QuantityText>1</QuantityText>
                    
                    <MinusIcon />
                    
                    </QuantityControl>
                    <TrashIcon />
                </ItemInfo>
                </CartItem>
            </CartContainer>

           
        </Products>

      </ProductsContainer>

      <PurchaseSummary>
        <h2>Subtotal =</h2>
        <div>R$ 34,90</div>

        <CheckoutButton>Finalizar compra</CheckoutButton>

      </PurchaseSummary>

    </Container>

  );
}

const Container = styled.div`
  background: linear-gradient(
    to bottom right,
    rgba(157, 233, 148, 1),
    rgba(174, 214, 238, 1)
  );
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductsContainer = styled.div`
flex-grow: 1;
padding: 16px;
display: flex;
flex-direction: column;
justify-content: space-between;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
`
const Products = styled.div`
overflow-y: scroll;
margin: 10px 0px;
::-webkit-scrollbar {
    display: none;
}
`

const CartTitle = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 2rem;
font-weight: 700;
color: #222;
margin: 2rem auto;
`;

const CartContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #fff;
width: 100%;
height: 15rem;
padding: 1.5rem;
border-radius: 10px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
margin-bottom: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  position: relative;
`;

const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 2rem;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemName = styled.h3`
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
font-weight: 600;
margin-bottom: 1rem;
`;

const ItemPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 8rem;
  top: 8rem;

`;

const PlusIcon = styled(BsFillPlusCircleFill)`
  color: #52b6ff;
  width: 1.8rem;
  height: 1.8rem;
`;

const MinusIcon = styled(BsFillDashCircleFill)`
  color: #52b6ff;
  width: 1.8rem;
  height: 1.8rem;
`;

const TrashIcon = styled(FaTrash)`
color: #52b6ff;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  bottom: 0px;
  right:0px;
  color: gray;
`
const CheckoutButton = styled.button`
border: none;
border-radius: 4.63636px;
width: 10rem;
height: 3rem;
background-color:#52b6ff;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
color:#fff;
font-weight: 600;
position: absolute;
top: 20px;
right: 150px;
`

const QuantityText = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  font-family: 'Roboto', sans-serif;
`
const PurchaseSummary = styled.div`
width: 50%;
height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 2rem;
position: relative;
h2, div{
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
}
h2{
    position:absolute;
    top: 30px;
    left: 200px;
}
div {
    position:absolute;
    top: 30px;
    left: 350px;
}
`