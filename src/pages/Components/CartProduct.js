import styled from "styled-components";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import {FaTrash} from "react-icons/fa";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/loginContext";
import { apiUrl } from "../../App";

export default function CartProduct ({cartProducts}){

    const {config} = useContext(UserContext);
    
    return (
        cartProducts.map((p) => (
            <CartContainer>
                <CartItem>
                <ItemImage src={p.image} alt="Product image" />
                <ItemInfo>
                    <ItemName>{p.name}</ItemName>
                    <ItemPrice>R$ {p.price}</ItemPrice>
                    <QuantityControl>
                    
                    <PlusIcon onClick={() => {
                        axios.post(`${apiUrl}/modifyProductQuantity/plus`, {p}, config)
                            .then((res) => console.log(res.data))
                            .catch((err) => console.log(err.response.data))
                        }}/>
                    
                    <QuantityText>{p.quantity}</QuantityText>
                    
                    <MinusIcon onClick={() => {
                        axios.post(`${apiUrl}/modifyProductQuantity/minus`, {p}, config)
                            .then((res) => console.log(res.data))
                            .catch((err) => console.log(err.response.data))
                        }}/>
                    
                    </QuantityControl>
                    <TrashIcon onClick={() => {
                        axios.post(`${apiUrl}/deleteProduct`, {p}, config)
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
const QuantityText = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  font-family: 'Roboto', sans-serif;
`