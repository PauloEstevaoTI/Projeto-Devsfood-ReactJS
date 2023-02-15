import React from "react";
import { useState } from "react";

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
    
    const [qtd, setQtd] = useState(1);
      
    const handleAddProduct = () => {
        setQtd(qtd + 1);
        
    }

    const handleSubProduct = () => {
        if(qtd > 1){
            setQtd(qtd - 1);
        }       
    }

    const handleCloseModal = () => {
        setQtd(0);
        setStatus(false)
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
                            R$ {data.price * qtd}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton onClick={handleCloseModal} small={true} >Cancelar</ProductButton>
                <ProductButton>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
}

export default ModalProduct;