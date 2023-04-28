import styled from "styled-components";
import Header from "./Components/Header";
import { PageContainer } from "./LoginPage";
import { HiMagnifyingGlass } from "react-icons/hi2";
import CartIcon from "./Components/CartIcon";
import MagnifyingGlass from "./Components/MagnifyingGlassIcon";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
    return (
        <>
            <Header />
            <PageContainer>

                <CartIcon />
                <MagnifyingGlass />
                <ToastContainer />
            </PageContainer>
        </>
    );
}
