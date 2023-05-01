import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../App";
import { UserContext } from "../contexts/loginContext";
import CartProduct from "./Components/CartProduct";
import { useNavigate } from "react-router-dom";


export default function CartPage() {

  const [paymentMethod, setPaymentMethod] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();
  const { config } = useContext(UserContext);

  const [cartProducts, setCartProducts] = useState([])

    useEffect (() => {
        axios.get(`${apiUrl}/cartProducts`, config)
          .then((res) => {
            setCartProducts(res.data);
            let subtotal = 0;
            res.data.forEach(obj => {
              subtotal += obj.price * obj.quantity;
            });
            setSubtotal(subtotal);
          })
          .catch((err) => console.log(err.response.data))
    }, [cartProducts])

    function handleCheckout (){
      console.log("clicou em finalizar");
      console.log(paymentMethod)
      axios.post(`${apiUrl}/checkout`, {payment: paymentMethod, subtotal: subtotal}, config)
        .then(res => {
          console.log(res.data);
          navigate("/checkout");
        })
        .catch(err => console.log(err.response.data))
        
    }


  return (
    <Container>
      <CartTitle>Meu Carrinho</CartTitle>
      
      <ProductsContainer>

        <Products>
          <CartProduct cartProducts={cartProducts}/>
        </Products>

      </ProductsContainer>

      <PurchaseSummary>
        <h2>Subtotal =</h2>
        <div>R$ {subtotal.toFixed(2)}</div>

        <StyledSelect value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <StyledOption value="">Selecione a forma de pagamento</StyledOption>
          <StyledOption value="Cartão de Crédito">Cartão de Crédito</StyledOption>
          <StyledOption value="Cartão de Débito">Cartão de Débito</StyledOption>
          <StyledOption value="Boleto Bancário">Boleto Bancário</StyledOption>
          <StyledOption value="Pix">Pix</StyledOption>
          
        </StyledSelect>
      
        <CheckoutButton onClick={handleCheckout}>Finalizar compra</CheckoutButton>

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