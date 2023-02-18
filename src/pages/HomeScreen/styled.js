import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
   
`;

export const CategoryList = styled.div `
    display: flex;
    margin-top: 10px;
    
`

export const CategoryArea = styled.div `
    color: #FFF;
    margin-top: 20PX;
    
`

export const ProductArea = styled.div `
    margin: 20px 0;
`

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    
    @media(max-width: 1600px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    }
`
export const ProductPaginationArea = styled.div `
    display: flex;
    flex-wrap: wrap;
    
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 80px;

`

export const ProductPaginationItem = styled.div `
    background-color: ${props=>props.active === props.current ? '#DDD' : '#FFF'};
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    margin-right: 10px;
`


