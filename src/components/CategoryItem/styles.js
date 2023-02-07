import styled from "styled-components";

export const Container = styled.div `
    width: 80px;
    height: 80px;
    background-color: ${props => props.active == props.id ? '#FFF' : '#AAE09A' };
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;
    transition: all ease .5s;

`

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
`
