import styled from "styled-components";

export const Container = styled.div`
    border-radius: 10px;
    background-color: #136713;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.img`
    width: auto;
    height: 70px;
`

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    background-color: #FFF;
    background-image url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: 0;
    padding-left: 50px;
    cursor: pointer;
    transition: all ease .5s;
    font-size: 15px;


    &:focus {
        cursor: text;
    }

`
