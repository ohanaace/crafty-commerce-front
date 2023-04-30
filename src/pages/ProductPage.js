import styled from "styled-components";
import CartIcon from "./Components/CartIcon";
import Header from "./Components/Header";
import MagnifyingGlass from "./Components/MagnifyingGlassIcon";
import { PageContainer } from "./LoginPage";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    console.log(location.state)

    function handleCount(operation) {
        if (operation !== "add" && quantity === 1) return 
        if (operation === "add") {
            const counter = quantity + 1;
            setQuantity(counter);
        } else {
            const counter = quantity - 1;
            setQuantity(counter)
        }
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
                        <ItemName>
                            {location.state.description}
                        </ItemName>
                        <ItemPrice>
                            R$ {(location.state.price * quantity).toFixed(2)}
                        </ItemPrice>
                    </ItemInfo>
                    <QuantityContainer>
                        <MinusIcon onClick={() => handleCount("sub")} />
                        {quantity}
                        <PlusIcon onClick={() => handleCount("add")} />
                    </QuantityContainer>
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
 width: 90%;
 height: 20rem;
 margin-top: 2rem;
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
const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const PlusIcon = styled(BsFillPlusCircleFill)`
  color: #52b6ff;
  width: 1.8rem;
  height: 1.8rem;
`;

const MinusIcon = styled(BsFillDashCircleFill)`
  color: #52b6ff;
  width: 1.8rem;
  height: 1.8rem;
`