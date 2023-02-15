import styled from "styled-components";

export const Container = styled.div`
    display: ${props=>props.status ? 'flex' : 'none'};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;    
    justify-content: center;
    align-items: center;
`

export const ModalBody = styled.div`

    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0px 0px 50px #000;
    max-width: 100vw;
    max-height: 95vh;
    overflow: auto;
`