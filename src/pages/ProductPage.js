import styled from "styled-components";
import CartIcon from "./Components/CartIcon";
import Header from "./Components/Header";
import MagnifyingGlass from "./Components/MagnifyingGlassIcon";
import { PageContainer } from "./LoginPage";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { apiUrl } from "../App";
import { UserContext } from "../contexts/loginContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const { config } = useContext(UserContext);

    function handleCount(operation) {
        if (operation !== "add" && quantity === 1) return
        if (operation === "add") {
            const counter = quantity + 1;
            setQuantity(counter);
        } else {
            const counter = quantity - 1;
            setQuantity(counter);
        }
    }
    function addToCart() {
        const body = {quantity, productId: location.state._id};
        axios.post(`${apiUrl}/addProduct/${location.state._id}`, body, config)
        .then(res => {
            console.log(res.data);
            toast.success(res.data);
        })
        .catch(err => {
            toast.error(err.response.data);
            
        });
    }
    return (
        <>
            <Header />
            <PageContainer>
                <MagnifyingGlass />
                <DetailedProduct>
                    <ItemImage src={location.state.image} alt="product-image" />
                    <ItemInfo>
                        <ItemName>
                            {location.state.name}
                        </ItemName>
                        <ItemDescription>
                            {location.state.description}
                        </ItemDescription>
                        <ItemPrice>
                            R$ {(location.state.price * quantity).toFixed(2)}
                        </ItemPrice>
                    </ItemInfo>
                    <QuantityContainer>
                        <MinusIcon onClick={() => handleCount("sub")} />
                        {quantity}
                        <PlusIcon onClick={() => handleCount("add")} />
                    </QuantityContainer>
                    <AddToCardButton onClick={addToCart} >
                        Adicionar ao carrinho
                        <MiniCartIcon />
                    </AddToCardButton>
                    <ToastContainer />
                </DetailedProduct>
                <CartIcon />
            </PageContainer>
        </>
    )
}

const DetailedProduct = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #F5F5DC;
width: 40%;
height: 45rem;
padding: 1.5rem;
border-radius: 10px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
margin-bottom: 1rem;
@media screen and (max-width: 400px) {
 margin-top: 5rem;
 width: 90%;
 height: 25rem;
 padding: 1rem;
 justify-content: flex-start;
}
`
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ItemImage = styled.img`
  width: 90%;
  height: 55%;
  border-radius: 3px;
@media screen and (max-width: 400px) {
 width: 90%;
 height: 10rem;
 margin-bottom: 0.5rem;
}
`
const ItemDescription = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
font-weight: normal;
margin-bottom: 1rem;
@media screen and (max-width: 400px) {
 width: 90%;
 font-size: 1rem;
}
`
const ItemName = styled.h3`
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
font-weight: 700;
margin-bottom: 1rem;
@media screen and (max-width: 400px) {
 width: 90%;
 font-size: 1rem;
}
`
const ItemPrice = styled.p`
font-size: 1.25rem;
font-weight: 500;
margin-bottom: 1rem;
font-family: 'Roboto', sans-serif;
@media screen and (max-width: 400px) {
 width: 90%;
 font-size: 1rem;
}
`
const QuantityContainer = styled.div`
width: 20%;
display: flex;
align-items: center;
justify-content: space-between;
font-family: 'Roboto', sans-serif;
@media screen and (max-width: 400px){
    width: 40%;
    font-size: 1rem;
}
`
const PlusIcon = styled(BsFillPlusCircleFill)`
color: #52b6ff;
width: 1.8rem;
height: 1.8rem;
`
const MinusIcon = styled(BsFillDashCircleFill)`
color: #52b6ff;
width: 1.8rem;
height: 1.8rem;
`
const AddToCardButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: #52B6FF;
color: #FFF;
border: none;
font-family: 'Roboto', sans-serif;
margin-bottom: 10px;
width: 50%;
height: 40px;
margin: 2px;
border-radius: 4px;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: 400;
@media screen and (max-width: 400px){
 margin-top: 1rem;
 width: 80%;
 font-size: 1rem;
}
`
const MiniCartIcon = styled(FaShoppingCart)`
color: #FFF;
margin-left: 15px;
height: 16px;
width: 16px;
`