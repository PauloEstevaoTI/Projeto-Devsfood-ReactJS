import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    padding: 10px;
    background-color: #FFF;
    margin: 10px;
    border-radius: 10px;
    justify-content: space-between;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    color: #0B4D0B;
    cursor: pointer;
    
   
`

export const ProductPhotoArea = styled.div`
    background-color: #FFF;
    width: 100px;
`

export const ProductPhoto = styled.img `
    width: 100%;
    border-radius: 10px;
    
`

export const ProductInfoArea = styled.div `
    
    
    flex-direction: column;
    align-items: start;
    flex: 1;
    margin 0 10px;

`
export const ProductButtonArea = styled.div `
    align-items: center;
    justify-content: center;
    display: flex;
`

export const ProductName = styled.div `
    font-weight: bold;
    font-size: 20px;
   
`

export const ProductPrice = styled.div `
    font-size: 14px;
`

export const ProductIngredients = styled.div `
    font-size: 11px;
`
export const ProductButton = styled.img `
    width: 15px;

`