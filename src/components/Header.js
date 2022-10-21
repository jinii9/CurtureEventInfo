import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrap>
            <HeaderWrap>
                <Title>SEOUL CURTURE EVENT INFO</Title>
                <span>서울시 문화 행사 정보</span>
            </HeaderWrap>
            <MyPageWrap>
                <MyPage><Link to="/MyPage" style={{color:"black", textDecoration: "none"}}>MyPage</Link></MyPage>
            </MyPageWrap>
        </Wrap>
    );
};

export default Header;

const Wrap = styled.div`
    display: flex;
    /* justify-content: space-between; */
`;
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
const MyPageWrap = styled.div`
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 2rem;
`;
const MyPage = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 2rem;
    font-weight: 600;
`;