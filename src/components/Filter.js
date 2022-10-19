import React from 'react';
import styled from 'styled-components';

const Filter = () => {
    const OPTIONS = {
        region: [
            {
                value: "", name: "지역"
            },
            {
                value: "gangnam", name: "강남구"
            },
            {
                value: "gangdong", name: "강동구"
            },
            {
                value: "gangbuk", name: "강북구"
            },
            {
                value: "gangseo", name: "강서구"
            },
        ],
        kind: [
            {
                value: "", name: "분야"
            },
            {
                value: "consert", name: "콘서트"
            },
            {
                value: "classic", name: "클래식"
            },
            {
                value: "musical", name: "뮤지컬/오페라"
            },
            {
                value: "play", name: "연극"
            },
            {
                value: "dance", name: "무용"
            },
        ]
    }

    return (
        <>
            <FilterWrap>
                <Filtering>
                    {Object.keys(OPTIONS).map(keyName => (
                        <Select>
                            {OPTIONS[keyName].map(item => (
                                <Option
                                    key={item.value}
                                    value={item.value}
                                    // defaultValue={item.value}
                                >
                                    <p>{item.name}</p>
                                </Option>
                            ))}
                        </Select>            
                    ))}
                </Filtering>
                <FilterResult>

                </FilterResult>
            </FilterWrap>
            
        </>
    );
};


export default Filter;

// const Wrap = styled.div`
//     margin: 0 auto;
//     border: 1px solid red;
// `; 
const FilterWrap = styled.div`
    margin-top: 10rem;
`;
const Filtering = styled.div`
    /* margin: 0 auto; */
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
`;
const Select = styled.select`
    font-size: 2rem;
    margin: 2rem;
    padding: 1rem;
    /* line-height: 20px; */
    background-color: #f0f0f0;

`;
const Option = styled.option`
    /* background-color: aqua; */
`;
const FilterResult = styled.div``;

