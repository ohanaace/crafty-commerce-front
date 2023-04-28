import axios from "axios";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";
import { apiUrl } from "../../App";
import { useContext } from "react";
import { UserContext } from "../../contexts/loginContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MagnifyingGlass() {
    const {config} = useContext(UserContext)
    const [type, setType] = useState("");
    const [showSearchInput, setShowSearchInput] = useState(false);
    function searchProductType() {
        console.log("Sua pesquisa aqui :D");
        setShowSearchInput(!showSearchInput);
    }
    function getProductsByType(){
        axios.get(`${apiUrl}/products/${type}`, config)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
            toast.error(err.response.data);
        })
    
    }
    function handleEnterKey(e){
        if(e.key === "Enter"){
            console.log("envio com enter");
            getProductsByType();
        }
    }
    return (
        <>
            <DivRedonda onClick={searchProductType} >
                <MagnifyingGlassIcon />
            </DivRedonda>
            {showSearchInput && (
                <SearchHolder display={showSearchInput}>
                    <SearchInput
                        type="text"
                        placeholder="Digite sua busca aqui..."
                        value={type}
                        onChange={e => setType(e.target.value)}
                        onKeyDown={handleEnterKey}
                    />
                    <Button>
                        <MiniSearchGlass onClick={getProductsByType} />
                    </Button>
                </SearchHolder>)}
        </>
    )
}

const DivRedonda = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color:#F5F5DC;
display: flex;
align-items:center;
justify-content: center;
position: fixed;
top: 110px;
left: 15px;
`
const MagnifyingGlassIcon = styled(HiMagnifyingGlass)`
color: #52b6ff;
width: 2.5rem;
height: 2.5rem;
color: black;
border-radius: 50%;
:hover{
    cursor: pointer;
}
`
const SearchHolder = styled.div`
display: ${props => props.display ? "flex" : "none"};
width: 60%;

`
const SearchInput = styled.input`
position: fixed;
top: 110px;
left: 100px;
width: 60%;
height: 40px;
margin: 2px;
border-radius: 4px;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: 400;
padding: 10px;
border: solid 1px #000;
`
const Button = styled.button`
background-color: #52B6FF;
width: 40px;
height: 40px;
position: fixed;
top: 112px;
left:1210px;
border: none;
border-radius: 2px;
:hover{
    cursor: pointer;
}
`
const MiniSearchGlass = styled(HiMagnifyingGlass)`
color: #000;
width: 1.5rem;
height: 1.5rem;
`

