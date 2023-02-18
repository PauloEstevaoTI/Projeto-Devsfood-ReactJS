import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #FF0000;

`

export const Menu = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #136713;
    width: 80px;

`

export const PageBody = styled.div `
    display: flex;
    background-color: #00980d;
    background-image: url('/assets/bg.png');
    flex: 1;
    overflow-y: auto;
    position: relative;
`
