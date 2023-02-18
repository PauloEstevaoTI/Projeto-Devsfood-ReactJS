const initialState = {
    products:[],
    address:[],
    discount:0,
    delivery:0

};

export default (state = initialState, action) => {
    
    let products = [...state.products];
    
    switch(action.type) {
       case 'ADD_PRODUCT': {
            
            let id = action.payload.data.id;

            let index = products.findIndex(item=>item.id === id);

            if(index > -1){
                products[index].qtd += action.payload.qtd;
            }else{
                products.push({
                    ...action.payload.data,
                    qtd: action.payload.qtd
                });
            }           

            return {...state, products: products}
        }
        case 'CHANGE_PRODUCT': {

            console.log(products)
            if(products[action.payload.key]){
                switch(action.payload.type){
                    case '-':
                        products[action.payload.key].qtd--;
                        console.log(products[action.payload.key].qtd)

                        if(products[action.payload.key].qtd <= 0 ){
                            console.log('diminuindo')
                            products = products.filter((item, index)=>index !=action.payload.key);
                        }
                    break;
                        
                    case '+':                     
                        products[action.payload.key].qtd++;
                    break;
                }
            }
            return {...state, products}
        }
    }


    return state;
}