import styled from "styled-components";
import Header from "./Components/Header";
import { PageContainer } from "./LoginPage";
import axios from "axios";
import MagnifyingGlass from "./Components/MagnifyingGlassIcon";
import CartIcon from "./Components/CartIcon";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import { ProductContainer } from "./HomePage";
export default function SearchPage() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();
    useEffect(() => {
        console.log(location.state);
        setFilteredProducts(location.state)
    }, []);

    return (
        <>
            <Header />
            <PageContainer>
                <ProductContainer>
                    {filteredProducts.map((product) => <ProductCard
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        type={product.type}
                    />)}
                </ProductContainer>
                <MagnifyingGlass />
                <CartIcon />
            </PageContainer>
        </>
    )
}
