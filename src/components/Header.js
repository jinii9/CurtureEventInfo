import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <>
            <HeaderWrap>
                <Title>SEOUL CURTURE EVENT INFO</Title>
                <span>서울시 문화 행사 정보</span>
            </HeaderWrap>
        </>
    );
};

export default Header;

const HeaderWrap = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 10rem;

    display: flex;
    align-items: center;
    
    & > span {
        font-size: 1.5rem;
        margin-left: 5rem;
    }
`;
const Title = styled.div`
    width: 20rem;
    padding: 0rem 1rem;
    margin: 3rem 2rem;
    
    line-height: 5rem;
    font-size: 1.4rem;
    font-weight: bold;
    border: 1px solid white;
`;