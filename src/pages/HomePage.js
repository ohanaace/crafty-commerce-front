import styled from "styled-components";
import Header from "./Components/Header";
import { PageContainer } from "./LoginPage";
import CartIcon from "./Components/CartIcon";
import MagnifyingGlass from "./Components/MagnifyingGlassIcon";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../App";
import { useContext } from "react";
import { UserContext } from "../contexts/loginContext";
import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import { SearchContext } from "../contexts/searchContext";


export default function HomePage() {
    const { config } = useContext(UserContext);
    const [productList, setProductList] = useState([]);
    const {showSearchInput} = useContext(SearchContext);
    useEffect(() => {
        axios.get(`${apiUrl}/products`, config)
            .then(res => {
                setProductList(res.data);
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }, [])
    return (
        <>
            <Header />
            <PageContainer>
                <ProductContainer showSearchInput={showSearchInput} >
                    {productList.map((product) => <ProductCard
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        image={product.image}
                        type={product.type}
                    />)}
                </ProductContainer>
                <CartIcon />
                <MagnifyingGlass showSearchInput={showSearchInput} />
                <ToastContainer />
            </PageContainer>
        </>
    );
}
const ProductContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
padding: 10px;
width: 50%;
@media screen and (max-width: 600px) {
 margin-top: ${props => props.showSearchInput ? "180px" : "120px" };
 flex-direction: column;
}
@media screen and (max-width: 1200px){
    margin-top: 100px;
flex-direction: column;
}
`
export {ProductContainer}