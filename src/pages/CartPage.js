import styled from "styled-components";
import {BsFillPatchPlusFill, BsFillPatchMinusFill} from "react-icons/bs";


export default function CartPage (){
    return (
        <Container>
            <Cart>Meu Carrinho</Cart>
            <CartContainer>
                <Details>
                    <Tittle>Produto</Tittle>
                    <Name>Hidratante corporal c/ manteiga de karité</Name>
                </Details>
                <Details>
                    <Tittle>Preço</Tittle>
                    <Name>R$34,90</Name>
                </Details>
                <Details>
                    <Tittle>Quantidade</Tittle>
                    <Quantity>
                        <PlusIcon />
                        <Counter>0</Counter>
                        <MinusIcon />
                    </Quantity>
                    
                </Details>
            </CartContainer>
        </Container>
    )
}

const Container = styled.div`
background: rgb(157,233,148);
background: radial-gradient(circle, rgba(157,233,148,1) 0%, rgba(174,214,238,1) 100%);
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
`
const Cart = styled.div`
position: absolute;
top: 20px;
left:20px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
color: black;
`
const CartContainer = styled.div`
box-sizing: border-box;
width: 600px;
height:400px;
position: absolute;
top: 150px;
left:200px;
display:flex;

border: 2px solid black;
padding: 10px;
overflow-y: scroll;
::-webkit-scrollbar{
    display:none;
}
background-color:pink;
`
const Details = styled.div`
width: 80px;
height: 50px;
display: flex;
flex-direction: column;
`
const Tittle = styled.h2`
width: 150px;
margin-bottom: 10px;
border: 1px solid black;
font-size: 23px;
font-family: 'Roboto', sans-serif;
color: #52B6FF;
background-color: red;
`
const Name = styled.p`
width: 150px;
height: 50px;
border: 2px solid black;
font-size: 16px;
font-family: 'Roboto', sans-serif;
color: #52B6FF;
`
const Counter = styled.div`
width:20px;
height:20px;
font-size: 16px;
font-family: 'Roboto', sans-serif;
color: #52B6FF;
display: flex;
justify-content: center;
align-items: center;
border: 0.1px solid black;
`
const Quantity = styled.div`
width:50px;
height:50px;
display:flex;
`
const PlusIcon = styled(BsFillPatchPlusFill)`
width: 20px;
height:20px;
color: black;
`
const MinusIcon = styled(BsFillPatchMinusFill)`
width: 20px;
height:20px;
color: black;
`