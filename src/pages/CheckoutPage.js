import styled from "styled-components";

export default function CheckoutPage (){
    return (
        <Container>
            <Title>Resumo do pedido</Title>

            <CheckoutContainer>

                <Infos>

                    <InfosContainer>
                        
                    </InfosContainer>

                
                </Infos>

            </CheckoutContainer>

        </Container>

  );
}

const Container = styled.div`
  background: linear-gradient(
    to bottom right,
    rgba(157, 233, 148, 1),
    rgba(174, 214, 238, 1)
  );
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CheckoutContainer = styled.div`
flex-grow: 1;
padding: 16px;
display: flex;
flex-direction: column;
justify-content: space-between;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
background-color:red;
`
const Infos = styled.div`
overflow-y: scroll;
margin: 10px 0px;
::-webkit-scrollbar {
    display: none;
}
background-color:gray;
`

const Title = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 2rem;
font-weight: 700;
color: #222;
margin: 2rem auto;
`;

const InfosContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #fff;
width: 100%;
height: 15rem;
padding: 1.5rem;
border-radius: 10px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
margin-bottom: 1rem;
`;
