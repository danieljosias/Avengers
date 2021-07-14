import React from 'react';
import Api from '../../Api';
import styled from 'styled-components';


function login({onReceiveGoogle}) {
    
    const actionLoginGoogle = async () =>{
        let result = await Api.googleLogar();

        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error')
        }
    }

    return (

        <Login>
             <LoginTitle>Login</LoginTitle>
             <ContainerInput>
                <Input type="text" placeholder="E-mail"/>
                <Input type="password" placeholder="Senha"/>
             </ContainerInput>
            
             <ContainerBtn>
                <Btn>Logar</Btn>
            </ContainerBtn>

             <Link onClick={actionLoginGoogle}>Logar com Google?</Link>
             <Link to="">Não tem uma conta?</Link>
        </Login>
    )
}

export default login;

const Login = styled.div`
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #1E90FF;
`

const LoginTitle = styled.h1`
    text-align: center;
    color: #000;
    
`
const ContainerInput = styled.div`

`
const Input = styled.input`
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
`
const ContainerBtn = styled.div`
    
`
const Btn = styled.button`
    width: 174px;
    cursor: pointer;
    font-weight: bold;

    &:hover{
        background: #393939;
        color: #FFF;
    }
`
const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    margin-top:4px;

    &:hover{
        text-decoration: underline #393939;
    }
`
