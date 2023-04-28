import styled from "styled-components";
import Header from "./Components/Header";
import { PageContainer } from "./LoginPage";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function HomePage(){
    return (
        <>
        <Header />
        <PageContainer>
        <MagnifyingGlass />
        </PageContainer>
        </>
    );
}

const MagnifyingGlass = styled(HiMagnifyingGlass)`
color: #52b6ff;
width: 2.5rem;
height: 2.5rem;
position: fixed;
top: 110px;
right: 15px;
color: black;
border-radius: 50%;
:hover{
    cursor: pointer;
}
`