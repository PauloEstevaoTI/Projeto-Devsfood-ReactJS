const initialState = {
    products:[],
    address:[],
    discount:0,
    delivery:0

};

export default (state = initialState, action) => {
    switch(action.type) {
       case 'ADD_PRODUCT':
            let products = [...state.products];
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

            console.log(products)

            return {...state, products: products}
    }

    return state;
}