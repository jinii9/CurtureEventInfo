import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';

function FilterItem ({item}) {
    return (
        <>
            <ItemWrap>
                <ItemInfo>
                    <ItemImg>
                        <img src={item.MAIN_IMG} />
                        <ItemCodeName>{item.CODENAME}</ItemCodeName>
                    </ItemImg>
                    <ItemTitle>{item.TITLE}</ItemTitle>
                    <ItemDate>{item.DATE}</ItemDate>
                </ItemInfo>
            </ItemWrap>  
        </>
    )
}

const Filter = ({asnycCheck, APIData}) => {
    // console.log("FiterFilter")
    console.log(APIData)

    const [selectedRegion, setSelectedRegion] = useState('지역');
    const [selectedKind, setSelectedKind] = useState('분야');
    const [filterResult, setFilterResult] = useState(APIData);
    // const [resultCheck, setResultCheck] = useState(false);
    const OPTIONS = {
        region: [
            { value: "all", name: "지역"},
            {value: "joinglo", name: "종로구"},
            { value: "songpa", name: "송파구"},
            {value: "gulo", name: "구로구"},
            {value: "jung", name: "중구"},
            {value: "mapo", name: "마포구"},
            {value: "gangdong", name: "강동구"},
            {value: "gwangjin", name: "광진구"},
            {value: "yangcheon", name: "양천구"},
        ],
        kind: [
            {value: "all", name: "분야"},
            {value: "consert", name: "콘서트"},
            {value: "classic", name: "클래식"},
            {value: "musical", name: "뮤지컬/오페라"},
            {value: "play", name: "연극"},
            {value: "dance", name: "무용"},
        ]
    }

    useEffect(() => {

        async function changeSelectResultHandler () {
            if(selectedRegion==='지역' || selectedKind==='분야'){
                // setFilterResult(APIData);
                if(selectedRegion==='지역' && selectedKind==='분야'){
                    setFilterResult(APIData);
                } 
                if(selectedRegion!=='지역' && selectedKind==='분야'){
                    const result = APIData.filter((item) => (item.GUNAME===selectedRegion));
                    setFilterResult(result);

                }
                if(selectedKind!=='지역' && selectedRegion==='분야'){
                    const result = APIData.filter((item) => (item.CODENAME===selectedKind));
                    setFilterResult(result);

                }
            } else{
                console.log('필터: '  + selectedRegion + ',' + selectedKind);
                
                const result = APIData.filter((item) => (item.GUNAME===selectedRegion && item.CODENAME===selectedKind));
                // const result = APIData.filter((item) => (item.GUNAME===selectedRegion));

                setFilterResult(result);
 
            }
            // setResultCheck(true);
        }
        changeSelectResultHandler();
    }, [selectedRegion, selectedKind]);

    async function changeSelectOptionHandler (keyName, e) { // 값 넣기
        switch (keyName) {
            case "region":
                 return setSelectedRegion(e.target.value);
                break;
            case "kind":
                setSelectedKind(e.target.value);
                break;
        }

    }
    // console.log(selectedRegion);
    // console.log(selectedKind);
    // console.log(resultCheck);
    // console.log(filterResult);
    return (
        <>
            <FilterWrap>
                <Filtering>
                    {Object.keys(OPTIONS).map((keyName, index) => (
                        
                        <Select key={index} onChange={(e) => changeSelectOptionHandler(keyName, e)}>
                            {OPTIONS[keyName].map((item,index) => (
                                <Option
                                    key={index}
                                    value={item.name}
                                    // defaultValue={item.value}
                                >
                                    {item.name}
                                </Option>
                            ))}
                        </Select>

                    ))}
                </Filtering>
                
                <FilterResult>
                    {/* {(asnycCheck&&filterResult) && filterResult.map((item,index) => (<div key={index}>{item.GUNAME}</div>))} */}
                        

                    {/* {filterResult && filterResult.map((item) => (item.GUNAME))} */}
                    
                    {/* {asnycCheck && (
                        APIData.map((item) => (
                            selectedRegion==='all'||selectedKind==='all' ? (
                                <span key={item}> 처음 {item.GUNAME} </span>
                                // <></>
                            ) : (
                                // <>{APIData.filter((item) => item.GUNAME===selectedRegion)}</>
                                (item.GUNAME===selectedRegion) ? (<div key={item}>필터링성공 {item.GUNAME}</div>) : (<></>)
                                // <></>
                            )
                        ))
                    )} */}
                    {/* {selectedRegion} {selectedKind} <br/> */}
                    {/* {filterResult.map((item) => (item.GUNAME))} */}
                    {filterResult.map((item) => (<FilterItem item={item}/>))}
                </FilterResult>
            </FilterWrap>
            
            {/* 필터링결과 */}

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
const FilterResult = styled.div`
    display: grid;
    place-items: center;
    /* grid-template-columns: repeat(auto-fill, minmax(auto,max-content)); */
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
    /* grid-template-columns: repeat(3, 1fr); */
    /* grid-template-rows: 200px 200px; */
    font-size: 2rem;
    /* border: 3px solid green; */
    margin-top: 10rem;
    margin-bottom: 5rem;

`;
// -------------------------------------------------------------------
const ItemWrap = styled.div`
    width: 40rem;
    height: 70rem;
    background-color: white;
    color: black;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem;
    /* justify-content: center; */
`;
const ItemInfo = styled.div`
    margin-top: 2rem;
    width: 35rem;
`
const ItemImg = styled.div`
    position: relative;
    padding-bottom: 2rem;
    & img {
        position: relative;
        width: 35rem;
        height: 500px;
    }

`;
const ItemCodeName = styled.div`
    position: absolute;
    bottom: 92.5%;
    z-index: 100;
    width: 10rem;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
    color: white;
    background-color: rgb(10,129,129);
`;
const ItemTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;
const ItemDate = styled.div`
    font-size: 2rem;
`;

