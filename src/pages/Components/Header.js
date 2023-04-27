import styled from "styled-components"
import logo from "../../assets/transparentlogo.png"
import { FiLogOut } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <> 
            <Text>         
                    <Logo src={logo} alt="logo" />
                    Crafty
                <Link><FiLogOut className="myIcon" size={38}/></Link>
            </Text>

        </>
    )
}

const Text = styled.header`
position:absolute;
left:0px;
top:0px;
width:100vw;
height:100px;
display:flex;
justify-content:space-between;
background-color:#F5F5DC;
align-items:center;
align-content:center;
font-family: 'cookie', sans-serif;
    font-weight: 400;
    font-size: 62px;
.myIcon{
    margin-right:55px;    
}

`
const Logo = styled.img`
max-height:7rem;
max-width:7rem;
`