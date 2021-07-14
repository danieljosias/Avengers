import React from 'react'
import styled from 'styled-components';

function footer(){
    return(
        <div>
            <Footer>
                <ContainerImage>
                    <div>
                        <img width="80" src={'https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png'}></img>
                    </div>
                    <div>
                        <img width="100" src={'https://logodownload.org/wp-content/uploads/2017/05/playstation-4-logo-ps4-1.png'}></img>
                    </div>
                    <div>
                        <img width="100" src={'https://logodownload.org/wp-content/uploads/2018/11/xbox-logo.png'}></img>
                    </div>
                    <div>
                        <img width="35" src={'https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png'}></img>
                    </div>
                </ContainerImage>
            </Footer>
        </div>
    )
}

export default footer;

const Footer = styled.footer`
    background: #000;
    height: 70px;
    border-top: 1px solid #FFF;
`
const ContainerImage = styled.div`
    display: flex;
    justify-content:space-around;
    cursor: pointer;
    padding-top: 20px;

    
`