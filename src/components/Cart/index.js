import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    CartArea,
    CartHeader,
    CartBody,
    CartIcon,
    CartText,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtdImage,
    ProductQtd
} from "./styled";


const Cart = () => {

    const dispatch = useDispatch();
    const products = useSelector(state=> state.cart.products)
    const [show, setShow] = useState(false);
    const [qtd , setQtd] = useState(1);

    const handleCartClick = () => {
        console.log('click')
        setShow(!show);
    }

    // const handleAddCart = () => {
        
    //     setQtd(qtd + 1);
    // }

    const handleProductChange = (key, type) => {
        //alert(key+" = "+type)
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload:{ key, type }
        });
        
      
    }

    return(
        <CartArea >
            <CartHeader show={show} onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu carrinho ({products.length})</CartText>
               
                { show  &&
                    <CartIcon show={show} src="/assets/down.png" />
                }
                
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>

                    {products.map((item, index)=>(
                         <ProductItem key={index}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>                       
                                <ProductQtdImage 
                                    onClick={() => handleProductChange(index, '-')} 
                                    src="/assets/minus.png" 
                                />
                                <ProductQtd>{item.qtd}</ProductQtd>
                                <ProductQtdImage 
                                    onClick={() => handleProductChange(index, '+')} 
                                    src="/assets/plus.png" 
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}

                   
                </ProductsArea>
            </CartBody>
        </CartArea>
    )
}

export default Cart;