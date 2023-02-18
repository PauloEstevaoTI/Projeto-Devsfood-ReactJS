import styled from "styled-components";

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 30px;
    
`
export const CartHeader = styled.div`
    display: flex;
    padding: 5px 10px;
    height: 40px;
    width: ${props=>props.show ? 'auto' : '250px' };
    align-items: center;
    cursor: pointer;
   

`
export const CartIcon = styled.img`
    margin-left: 10px;
    margin-right: 10px;
    height: 25px;
    width: auto;
`
export const CartText = styled.div`
    color: #FFF;
    font-size: 17px;
    flex: 1;
`
export const CartBody = styled.div`
    display: ${props=>props.show ? 'block' : 'none'};

`

export const ProductsArea = styled.div`
    padding: 10px;
    
`

export const ProductItem = styled.div`
    
    display: flex;
    margin: 10px;
    
`
export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`
export const ProductInfoArea = styled.div`
    
    margin-left: 10px;
    flex: 1;
    padding: 5px;
    color: #FFF;
`
export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`
export const ProductPrice = styled.div`
    font-size: 13px;
`
export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 10px;
    color: #FFF;
`
export const ProductQtdImage = styled.img `
    width: 13px;
    height: auto;
    cursor: pointer;
`

export const ProductQtd = styled.div `
    margin: 0px 10px;
    font-weight: bold;
    font-size: 18px;
`
