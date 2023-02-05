const initialState = {
    token: '',
    name: 'Teste'
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return {...state, token: action.payload.token}
        break;
        case 'SET_NAME':
            return {...state, name: action.payload.name};
    }

    return state;
}