import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { 
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons,
    ProductButton,
    ProductName,
    ProductIngredients,
    ProductQuantity,
    ProductPrice,
    ProductQtImage,
    ProductQtText

 } from "./styled";

const ModalProduct = ({ setStatus, data}) => {   
    
    const dispatch = useDispatch();
    const [qtd, setQtd] = useState(1);

    useEffect(()=> {
        setQtd(1);
    },[data])
      
    const handleAddProduct = () => {
        setQtd(qtd + 1);
        
    }

    const handleSubProduct = () => {
        if(qtd > 1){
            setQtd(qtd - 1);
        }       
    }

    const handleCloseModal = () => {
        // setQtd(1);
        setStatus(false)
    }

    const handleAddToCart = () => {
        
        dispatch({
            type: 'ADD_PRODUCT',
            payload:{ data, qtd }
        })
        

        setStatus(false);
    }

    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage onClick={handleSubProduct} src="/assets/minus.png" />
                            <ProductQtText>{qtd}</ProductQtText>
                            <ProductQtImage onClick={handleAddProduct} src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * qtd).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton onClick={handleCloseModal} small={true} >Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
}

export default ModalProduct;