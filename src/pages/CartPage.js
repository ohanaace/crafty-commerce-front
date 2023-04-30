import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../App";
import { UserContext } from "../contexts/loginContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProduct from "./Components/CartProduct";

export default function CartPage() {

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cartProducts, setCartProducts] = useState([])
  const { config } = useContext(UserContext);

  useEffect (() => {
    axios.get(`${apiUrl}/cartProducts`, config)
      .then((res) => setCartProducts(res.data))
      .catch((err) => console.log(err.response.data))
  }, [cartProducts])

  function handlePaymentMethodChange(e){
    console.log(e.target.value);
  }

  return (
    <Container>
      <CartTitle>Meu Carrinho</CartTitle>
      <ToastContainer />
      <ProductsContainer>

        <Products>
          <CartProduct cartProducts={cartProducts}/>
        </Products>

      </ProductsContainer>

      <PurchaseSummary>
        <h2>Subtotal =</h2>
        <div>R$ 34,90</div>

        <StyledSelect value={paymentMethod} onChange={handlePaymentMethodChange}>
          <StyledOption value="">Selecione a forma de pagamento</StyledOption>
          <StyledOption value="credito">Cartão de Crédito</StyledOption>
          <StyledOption value="debito">Cartão de Débito</StyledOption>
          <StyledOption value="boleto">Boleto Bancário</StyledOption>
          <StyledOption value="pix">Pix</StyledOption>
          
        </StyledSelect>
      
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
const StyledSelect = styled.select`
font-family: 'Roboto', sans-serif;
font-style: italic;
width:260px;
height:40px;
border-radius:5px;
border:none;
// background-color:#52b6ff;
font-size: 16px;
color:black;
position:absolute;
top:70px;
left:200px;
`;

const StyledOption = styled.option`
font-family: 'Roboto', sans-serif;
font-size: 16px;
`;