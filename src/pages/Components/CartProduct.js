import styled from "styled-components";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import {FaTrash} from "react-icons/fa";
import axios from "axios";
import { useContext} from "react";
import { UserContext } from "../../contexts/loginContext";
import { apiUrl } from "../../App";

export default function CartProduct ({cartProducts}){

    const {config} = useContext(UserContext);
    
    return (
        cartProducts.map((p, index) => (
            <CartContainer key={index}>
                <CartItem>
                <ItemImage src={p.image} alt="Product image" />
                <ItemInfo>
                    <ItemName>{p.name}</ItemName>
                    <ItemPrice>{(p.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ItemPrice>
                    <QuantityControl>
                    
                    <PlusIcon onClick={() => {
                        axios.get(`${apiUrl}/modifyProductQuantity/plus/${p._id}`, config)
                            .then((res) => console.log(res.data))
                            .catch((err) => console.log(err.response.data))
                        }}/>
                    
                    <QuantityText>{p.quantity}</QuantityText>
                    
                    <MinusIcon onClick={() => {
                        axios.get(`${apiUrl}/modifyProductQuantity/minus/${p._id}`, config)
                            .then((res) => console.log(res.data))
                            .catch((err) => console.log(err.response.data))
                        }}/>
                    
                    </QuantityControl>
                    <TrashIcon onClick={() => {
                        console.log("clicou na lixeira")
                        axios.get(`${apiUrl}/deleteProduct/${p._id}`, config)
                            .catch ((err) => console.log(err.response.message))
                    }}/>
                </ItemInfo>
                </CartItem>
            </CartContainer>
        ))
    )
}

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
  position: relative;
  @media screen and (max-width: 400px) {
 width: 100%;
}
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
@media screen and (max-width: 400px){
    width: 40%;
    font-size: 1rem;
}
`;

const ItemPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 400px) {
 width: 90%;
 font-size: 1rem;
}
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5rem;
  top: 8rem;
  @media screen and (max-width: 400px){
    justify-content: space-around;
    margin-top: 1.7rem;
    width: 40%;
    font-size: 1rem;
}
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
  @media screen and (max-width: 400px){
    font-size: 1rem;
    top: 165px;
}
`
const QuantityText = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  font-family: 'Roboto', sans-serif;
`