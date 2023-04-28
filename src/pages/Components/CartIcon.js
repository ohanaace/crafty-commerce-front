import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export default function CartIcon (){
    return (
        <DivRedonda>
            <Cart/>
        </DivRedonda>
    )
}

const DivRedonda = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color:#F5F5DC;
display: flex;
align-items:center;
`
const Cart = styled(FaShoppingCart)`
width: 50%;
heigth:50%;
margin-left:10px;
`