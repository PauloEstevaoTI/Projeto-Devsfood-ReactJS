import React from "react";
import { 
    Container, 
    ProductButtonArea,
    ProductInfoArea,
    ProductPhoto,
    ProductPhotoArea,
    ProductName,
    ProductPrice,
    ProductIngredients,
    ProductButton
    
} from "./styled";

const ProductItem = ({data}) => {
    return(
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={data.image} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png"/>
            </ProductButtonArea>
        </Container>
    )
}

export default ProductItem;