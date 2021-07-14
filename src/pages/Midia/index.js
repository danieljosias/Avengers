import React from 'react'
import styled from 'styled-components';
import midia from '../../video/midia.mp4';
import midia1 from '../../video/midia1.mp4';
import midia2 from '../../video/midia2.mp4';

function index() {
    return (
        <div>
            <ContainerMidia>

                <ContainerTitle>
                    <Title>Mídia</Title>
                </ContainerTitle>

                <ContainerVideos>
                    <Videos width="400" controls loop poster="https://img.youtube.com/vi/Mq7g-MZjL0U/maxresdefault.jpg">
                        <source src={midia} type="video/mp4" />
                    </Videos>

                    <Videos width="400" controls loop poster="https://tecnoblog.net/wp-content/uploads/2020/08/marvels-avengers-beta_20200807161253.jpg">
                        <source src={midia2} type="video/mp4" />
                    </Videos>

                    <Videos width="400" controls loop poster="https://i.ytimg.com/vi/zf7W4CG-7MA/maxresdefault.jpg">
                        <source src={midia1} type="video/mp4" />
                    </Videos>
                </ContainerVideos>

                <ContainerVideos>
                    <Videos width="400" controls loop poster="https://img.youtube.com/vi/Mq7g-MZjL0U/maxresdefault.jpg">
                        <source src={midia} type="video/mp4" />
                    </Videos>

                    <Videos width="400" controls loop poster="https://tecnoblog.net/wp-content/uploads/2020/08/marvels-avengers-beta_20200807161253.jpg">
                        <source src={midia2} type="video/mp4" />
                    </Videos>

                    <Videos width="400" controls loop poster="https://i.ytimg.com/vi/zf7W4CG-7MA/maxresdefault.jpg">
                        <source src={midia1} type="video/mp4" />
                    </Videos>
                </ContainerVideos>
            
            </ContainerMidia>
        </div>
    )
}

export default index;

const ContainerMidia = styled.div`
    position: relative;
    top: 80px;
    height: 650px;

    @media (max-width: 1024px){
        height: 550px;
    }

    @media (max-width: 780px){
        height: 450px;
    }
`
const ContainerTitle = styled.div`
    text-align: center;
`
const Title = styled.h1`
    color:#1E90FF;
    margin-bottom: 20px;
`
const ContainerVideos = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;  
`
const Videos = styled.video`
    border: 1px solid #FFF;
    cursor: pointer;
    
    
    @media (max-width:1024px){
        width: 300px;
    }

    @media (max-width:780px){
        width: 240px;
    }

    @media (max-width:680px){
        width: 200px;
    }

    @media (max-width:580px){
        width: 180px;
        
    }

    @media (max-width:500px){
        width: 140px;
    }
`