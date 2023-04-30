import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CartIcon() {
    return (
        <Link to={"/carrinho"}>
            <DivRedonda >
                <Cart />
            </DivRedonda>
        </Link>
    )
}
const DivRedonda = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color:#F5F5DC;
display: flex;
align-items:center;
position: fixed;
bottom: 40px;
right: 25px;
`
const Cart = styled(FaShoppingCart)`
color: #000;
width: 50%;
height:50%;
margin-left:10px;
`