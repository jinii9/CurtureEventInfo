import React from 'react';
import { useSelector } from "react-redux";
import styled, { createGlobalStyle }  from 'styled-components';
import { FilterItem } from './Filter';

import Header from './Header';

function BasketItem ({item}) {
    return(
        <ItemWrap>
            <ItemImg><img src={item.MAIN_IMG} /></ItemImg>
            <ItemLatterWrap>
                <ItemTitle>{item.TITLE}</ItemTitle>   
                <ItemInfo>
                    <span>{item.GUNAME} </span>
                    -
                    <span> {item.CODENAME}</span>
                    <p>{item.DATE}</p>
                </ItemInfo>
            </ItemLatterWrap>
        </ItemWrap>
    )
}
const MyPage = () => {
    const {info} = useSelector((state) => state.BasketReducer);
    const result = info.filter((item) => (item.GUNAME!=="")) //리듀서에서의 default값인 초기화 하나 없애주기 (해당 배열의[0])

    return (
        <>
            <GlobalStyle />
            <Header />
            <BasketResult>
                {result.map((item,index) => (
                    // <div key={index}>{item.GUNAME}</div>
                    
                    <div key={index}><BasketItem item={item}/></div>

                ))}
            </BasketResult>
        </>
    );
};

export default MyPage;

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
const BasketResult = styled.div`
    border: 1px solid white;
    margin: 0 auto;
    width: 200rem;
`;
const ItemWrap = styled.div`
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 2rem;
    margin: 2rem;
    font-size: 2rem;

    display: flex;
    align-items: center;
`;
const ItemImg = styled.div`

    & img {
        width: 20rem;
        height: 20rem;
        margin-right: 4rem;
    }
`;
const ItemLatterWrap = styled.div``;
const ItemTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
`;
const ItemInfo = styled.div`
    margin-top: 2rem;
`;

