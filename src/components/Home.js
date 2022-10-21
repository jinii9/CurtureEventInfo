import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from './Header';
import Filter from './Filter';
import styled, { createGlobalStyle }  from 'styled-components';
// 슬라이더 import
import Slider from "react-slick";
import './slick-carousel/slick/slick.css';
import './slick-carousel/slick/slick-theme.css';
// import Test from './Test';


function Slide ({APIData}) {
    // 슬라이드 셋팅
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }; 
    // console.log("슬라이드")
    return (
        <Slider {...settings}>
            {APIData.map((data, index) => ( 
                <div key={index}>
                    <SlideImg>
                        <img src={data.MAIN_IMG}/>
                    </SlideImg>
                    <Info>
                        <ul>
                        <li><InfoItem>{data.TITLE}</InfoItem></li>
                        <li>{data.DATE}</li>
                        <li>{data.PLACE}</li>
                        </ul>
                    </Info>
                </div>
                
            ))}
        </Slider>
    )
}


const Home = () => {
    // console.log("HomeHome")
    const [APIData, setAPIData] = useState();
    const [asnycCheck, setAsyncCheck] = useState(false);
    // OpenAPI 데이터
    useEffect(() => {
        // console.log("APIData");
        const fetchData = async () => {
            try {
                const url =
                    "http://openapi.seoul.go.kr:8088/584c7473636a696e35324d6a696a59/json/culturalEventInfo/1/50";

                const res = await axios({
                    method: "get",
                    url: url,
                });

                setAPIData(res.data.culturalEventInfo.row);
                setAsyncCheck(true);
                
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    // console.log(APIData[0]); 
    return (
        <>
            <GlobalStyle />
                <Header />
                
                <NavWrap>
                    <Nav>
                        <p>문화행사</p>
                        <ul>
                            <li>공연</li>
                            <li>전시</li>
                            <li>축제</li>
                            <li>교육/체험</li>
                            <li>기타</li>
                        </ul>
                    </Nav>
                    
                    {asnycCheck && (<Slide APIData={APIData}/>)}
                </NavWrap>
            
                <Section>
                        {/* <Test/> */}
                       {/* <Filter asnycCheck={asnycCheck} APIData={APIData}/> */}
                       {asnycCheck && (<Filter asnycCheck={asnycCheck} APIData={APIData}/>)}
                       {/* <Test/> */}

                       {/* <Test/> */}
                        {/* <Test/> */}
                    {/* 필터된 리스트들 */}
                </Section>

           {/* {APIData[0].CODENAME} */}
        </>
    );
};

export default Home;

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        /* font-size: 100%; */
        font: inherit;
        vertical-align: baseline;
    }
    html {
        font-size : 62.5%;
    }
    body {
        background-color: black;
        color: #ffffff;
        overflow-x: hidden;
    }
    ul {
        list-style: none;
    }
`;
const NavWrap = styled.div`
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 70rem;
    /* border: 1px solid red; */
`;
const Nav = styled.div`
    flex: 1 1 auto;
    /* border: 1px solid red; */

    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > p {
        margin: 15rem 0rem 5rem;
        font-size: 3rem;
        /* border: 1px solid red; */
    }
    & li {
        padding: 2rem;
        text-align: center;
        font-size: 2rem;
        /* border: 1px solid red; */
    }
`;
const SlideImg = styled.div`
    & img {
        width: 100%;
        height: 70rem;
        object-fit: cover;
        border-radius: 3rem 0 0 3rem;

        /* border: 5px solid white; */
    }
`
const Info = styled.div`
    position: absolute;
    top: 47rem;
    margin: 0 3rem;
    padding: 1rem;
    /* left: calc(10%); */

    /* left: 10%; */
    /* bottom: 20px; */

    /* left: 33rem; */
    z-index: 100;
    width: 33rem;
    height: 18rem;
    background-color: white;
    border: 5px solid black;
    color: black;
    
    display: flex;
    align-items: center;

    & ul li {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
`;
const InfoItem = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
`;

const Section = styled.div``;
const FilterWrap = styled.div``;
