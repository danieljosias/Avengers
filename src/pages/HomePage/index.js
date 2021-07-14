import React from 'react'
import styled from 'styled-components';
import video from '../../video/video.mp4';
import video2 from '../../video/video2.mp4';
import video3 from '../../video/video3.mp4';
import Carousel from 'react-elastic-carousel';


const ColorTitle = '#1E90FF';

function HomePage() {

  const breakPoints = [
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1024, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
  ]

  return (
    <div>
    
      <Video width="1342" controls loop >
        <source src={video} type="video/mp4" />
      </Video>

      <ContainerCarousel>

        <ContainerTitle>
          <Title>Incorpore seus avengers favoritos</Title>
        </ContainerTitle>
        
        <StyleCarousel>
        <Carousel breakPoints={breakPoints} >
          <Card>
            <img width="1182" height="200" src={'https://fyre.cdn.sewest.net/trm/5fc8c901eda51b0011dd8418/h1-Ss8eZ3-jW.jpg?width=1500'}></img>
          </Card>
          <Card>
            <img width="1182" height="200" src={'https://fyre.cdn.sewest.net/trm/5fc8c901eda51b0011dd8418/h2-s3G2uz6kR.jpg?width=1500'}></img>
          </Card>
          <Card>
            <img width="1182" height="200" src={'https://fyre.cdn.sewest.net/trm/5fc8c901eda51b0011dd8418/h3-QXlH6E1eZ.jpg?width=1500'}></img>
          </Card>
          <Card>
            <img width="1182" height="200" src={'https://fyre.cdn.sewest.net/trm/5fc8c901eda51b0011dd8418/h4-UjRpM1Mu6.jpg?width=1500'}></img>
          </Card>
          <Card>
            <img width="1182" height="200" src={'https://fyre.cdn.sewest.net/trm/5fc8c901eda51b0011dd8418/h5-XDxkxnyMs.jpg?width=1500'}></img>
          </Card>
          <Card>
            <img width="1182" height="200" src={'https://fyre.cdn.sewest.net/trm/5fc8c901eda51b0011dd8418/h6-ILjj2TzIe.jpg?width=1500'}></img>
          </Card>
          <Card>
            <img width="1182" height="200" src={'https://fyre.cdn.sewest.net/trm/5fc8c901eda51b0011dd8418/h7-vAs2wpb6q.jpg?width=1500'}></img>
          </Card>
        </Carousel>
        </StyleCarousel>

      </ContainerCarousel>

      <Container>
        <ContainerTitle>
          <Title>Reúna a sua equipe para salvar o mundo nas zonas de guerras multijogador</Title>
        </ContainerTitle>

        <ContainerVideos>
          <Videos width="400" controls loop>
            <source src={video} type="video/mp4" />
          </Videos>

          <Videos width="400" controls loop>
            <source src={video2} type="video/mp4" />
          </Videos>

          <Videos width="400" controls loop>
            <source src={video3} type="video/mp4" />
          </Videos>
        </ContainerVideos>
      </Container>

      <Container>
        <ContainerTitle>
          <Title>Notícias</Title>
        </ContainerTitle>
        
        <ContainerNoticias>
          <Noticias>
              <img  width="400" src={'https://fyre.cdn.sewest.net/trm/60c1390b4cce30001a64509b/wtw-41-thumbnail-U8g8ziQ2W.jpg?width=300'}></img>  
              <p>Blog semanal da mesa de estratégia</p><p> de Marvel's Avengers nº41</p>
          </Noticias>

          <Noticias>
              <img  width="400" src={'https://fyre.cdn.sewest.net/trm/60777286d8ff3c0012b4ba1a/wtw-33-thumbnail-5QIMA7M3l.jpg?width=300'}></img>  
              <p>Blog Semanal da Mesa de Estratégia</p><p> de Marvel’s Avengers nº33</p>
          </Noticias>

          <Noticias>
              <img  width="400" src={'https://fyre.cdn.sewest.net/trm/6051392a5bb7de0012754b24/scotch-heclint-maestro-01-QyYyVjnbz.png?width=300'}></img>  
              <p>Tudo que Você Precisa Saber Sobre a</p> <p>Atualização do Dia 18 de Março</p>
          </Noticias>
        </ContainerNoticias>
      </Container>

    </div>
  )
}

export default HomePage;

const Video = styled.video`
  @media(max-width:1024px){
    width: 960px;
  }

  @media(max-width:500px){
    width: 500px;
  }
`
const ContainerCarousel = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const StyleCarousel = styled.div`
  .rec-arrow{
    color: #1E90FF;
    background: #000;
  }

  .rec-arrow:hover{
    background: #393939;
    border: #000;
  }

  button.rec-dot{
    background: #000;
  }
`

const ContainerTitle = styled.div`
  margin-bottom: 20px;
`
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color:${ColorTitle};

  @media (max-width: 1024px){
    font-size: 18pt;
  }

  @media (max-width: 500px){
    font-size: 14pt;
  }
`
const Card = styled.div`
    width: 100%;
    height: 200px;
    background: #333;
    color: #FFF;
    font-size: 38px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media (max-width: 1024px){
      width: 50%;
    }
`




const Container = styled.div`
  margin-bottom: 30px;
`

const ContainerVideos = styled.div`
    display: flex;
    justify-content: space-around;

`
const Videos = styled.video`
   @media(max-width:1024px){
    width: 300px;
  }

  @media(max-width:500px){
    width: 150px;
  }
`

const ContainerNoticias = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    
`
const Noticias = styled.div`
    filter: grayscale(1);

    &:hover{
      filter: grayscale(0);
      transition: all ease-in .2s;
      cursor: pointer;
      transform: scale(1.1);
    }

    p{
      text-align: center;
      font-size: 14pt;
      font-weight: bold;
      color: #1E90FF;
    }

    @media(max-width:1024px){
    img{
      width: 280px;
    }  

    p{
      font-size: 12pt;
    }
    
  }

  @media(max-width:500px){
    img{
      width: 140px;
    }  

    p{
      font-size: 6pt;
    }
    
  }



`




