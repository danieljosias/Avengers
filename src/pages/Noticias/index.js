import React from 'react'
import styled from 'styled-components';

const ColorTitle = '#1E90FF';

function index() {
    return (
        <ContainerNews>
            <ContainerTitulo>
                <Titulo>Notícias</Titulo>
            </ContainerTitulo>

            <ContainerCard>
                <Card>
                    <CardInner>

                        <img alt='noticias' src={'https://fyre.cdn.sewest.net/trm/6051392a5bb7de0012754b24/scotch-heclint-maestro-01-QyYyVjnbz.png?width=300'} />
                        <p>Tudo que Você Precisa Saber Sobre a Atualização do Dia 18 de Março</p>
                        <p className="breakrow"></p>
                        <p className="text">O dia 18 de março será um grande dia para nós, com conteúdo novo e atualizações. Queríamos aproveitar para rever o que você pode esperar, além de oferecer mais...</p>
                        <button><a target="_blank" href="https://avengers.square-enix-games.com/pt-br/news/eyntk-march-18">Saiba Mais</a></button>
                    </CardInner>
                </Card>
                <Card>
                    <CardInner>

                        <img alt='noticias' src={'https://fyre.cdn.sewest.net/trm/601c1d4af34ffb001a049a20/wtw-24-thumbnail-hY8jtTMu0.jpg?width=300'} />
                        <p>Blog semanal da mesa de estratégia de Marvel's Avengers nº23</p>
                        <p className="breakrow"></p>
                        <p className="text">O dia 18 de março será um grande dia para nós, com conteúdo novo e atualizações. Queríamos aproveitar para rever o que você pode esperar, além de oferecer mais...  </p>
                        <button><a target="_blank" href="https://avengers.square-enix-games.com/pt-br/news/wtw_week_23">Saiba Mais</a></button>
                   </CardInner>
                </Card>
                <Card>
                    <CardInner>

                        <img alt='noticias' src={'https://fyre.cdn.sewest.net/trm/5faadc386ec5670018121d69/tonyworkbench_patchnotes_1920x1080-1--cwzwYhkBG.jpg?width=300'} />
                        <p>Blog semanal da mesa de estratégia de Marvel's Avengers nº13</p>
                        <p className="breakrow"></p>
                        <p className="text">O dia 18 de março será um grande dia para nós, com conteúdo novo e atualizações. Queríamos aproveitar para rever o que você pode esperar, além de oferecer mais... </p>
                        <button><a target="_blank" href="https://avengers.square-enix-games.com/pt-br/news/v1-3-5-patch-notes">Saiba Mais</a></button>
                    </CardInner>
                </Card>
            </ContainerCard>

            <ContainerCard>
                <Card>
                    <CardInner>

                        <img alt='noticias' src={'https://fyre.cdn.sewest.net/trm/5f9afadd4b34040011370876/week9blogthumbnail-hKhKbgzN0.jpg?width=300'} />
                        <p>Blog semanal da Mesa de estratégia de Marvel's Avengers: 29/10/2020</p>
                        <p className="breakrow"></p>
                        <p className="text">Feliz quinta-feira, fãs da Marvel, e bem-vindos ao nosso Blog semanal da Mesa de Estratégia de Marvel's Avengers, onde falamos sobre as notícias, notas de atualização..   </p>
                        <button><a target="_blank" href="https://avengers.square-enix-games.com/pt-br/news/wtw_week_7">Saiba Mais</a></button>
                    </CardInner>
                </Card>
                <Card>
                    <CardInner>

                        <img alt='noticias' src={'https://fyre.cdn.sewest.net/trm/5f8849aa2c68580018b2a831/wtwb_10_15_thumb-eb7MXvOYz.jpg?width=300'} />
                        <p>Blog semanal da Mesa de estratégia de Marvel's Avengers: 15/10/2020</p>
                        <p className="breakrow"></p>
                        <p className="text">Feliz quinta-feira, fãs da Marvel, e bem-vindos ao nosso Blog semanal da Mesa de Estratégia de Marvel's Avengers, onde falamos sobre as notícias, notas de atualização... </p>
                        <button><a target="_blank" href="https://avengers.square-enix-games.com/pt-br/news/wtw_week_6">Saiba Mais</a></button>
                    </CardInner>
                </Card>
                <Card>
                    <CardInner>

                        <img alt='noticias' src={'https://fyre.cdn.sewest.net/trm/5f809aac84f6430018646b19/wtwb_10_8_thumb-sh9uGnumb.jpg?width=300'} />
                        <p>Blog semanal da Mesa de estratégia de Marvel's Avengers: 08/10/2020</p>
                        <p className="breakrow"></p>
                        <p className="text">Feliz quinta-feira, fãs da Marvel, e bem-vindos ao nosso Blog semanal da Mesa de Estratégia de Marvel's Avengers, onde falamos sobre as notícias, notas de atualização...</p>
                        <button><a target="_blank" href="https://avengers.square-enix-games.com/pt-br/news/v1-3-5-patch-notes">Saiba Mais</a></button>
                    </CardInner>
                </Card>
            </ContainerCard>

        </ContainerNews>
    )
}

export default index

const ContainerNews = styled.div`
    position: relative;
     top: 80px;
     margin-bottom: 80px;
`
const ContainerTitulo = styled.div`
    text-align: center;
`
const Titulo = styled.h1`
    color:#1E90FF;
    margin-bottom: 20px;

    @media (max-width: 500px){
        font-size: 20pt;
    }
`

const ContainerCard = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-around;
`
const Card = styled.div`
    width: 300px;
    height: 380px;
    border: 1px solid #1E90FF;
    border-radius: 0px 0px 10px 10px;
    cursor: pointer;
    margin-bottom: 40px;

    &:hover{
            transition: all ease-in .3s;
            transform: scale(1.1);
        }

        @media (max-width: 780px){
            width: 200px;
        }

        @media (max-width: 680px){
            width: 180px;
        }

        @media (max-width:580px){
            width: 160px;
            height: 360px;
        }

        @media (max-width:500px){
            width: 140px;
            height: 360px;
        }

`
const CardInner = styled.div`
    img{
        
        @media (max-width: 780px){
            width: 200px;
        }

        @media (max-width: 680px){
            width: 180px;
        }

        @media (max-width: 580px){
            width: 160px;
        }

        @media (max-width: 500px){
            width: 140px;
        }
        
    }

    button{
        background: #393939;
        padding: 5px;
        border-radius: 10px 5px 0 0;
        filter: brightness(1);
        border: 1px solid #FFF;
    }

    

    a{
        text-decoration: none;
        color: #FFF;
    }


    p{
        text-align: center;
        font-weight: bold;
        color:#1E90FF;
        margin-top: 3px;

        @media (max-width: 780px){
            font-size: 11pt;
        }

        @media (max-width: 580px){
            font-size: 10pt;
        }

        @media (max-width: 500px){
            font-size: 9pt;
        }
    }

    .breakrow:after{
        content: '____________________________';
        margin-bottom:5px;
        
        @media (max-width: 780px){
            content: '__________________';
        }
        
    }

    .text{
        margin: 10px;
    }

`
