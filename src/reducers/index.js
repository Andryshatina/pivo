const initialState = {
    beer: [],
    loading: true,
    error: null,
    currentBeer: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_BEER_REQUEST':
            return{
                beer: [],
                loading: true,
                error: null,
                currentBeer: []
            };
        case 'FETCH_SOME_BEER_REQUEST':
            return{
                beer: [],
                loading: true,
                error: null,
                currentBeer: []
            };
        case 'FETCH_ALL_BEER_SUCCESS':
            return{
                beer: action.payload,
                loading: false,
                error: null,
                currentBeer: []
            };
        case 'FETCH_SOME_BEER_SUCCESS':
            return{
                ...state,
                loading: false,
                error: null,
                currentBeer: action.payload
            };
        case'FETCH_BEER_FAILURE':
            return{
                beer: [],
                loading: true,
                error: action.payload,
                currentBeer: []
            };
        case 'SOME_BEER_REQUEST':
            const beerId = action.payload;
            const curBeer = state.beer.find((el) => el.id === beerId);
            if(curBeer === undefined) {
                return{
                    ...state,
                    currentBeer: []
                }
            }
            return{
                ...state,
                currentBeer: curBeer
            }
        default: return state;
    }
}
export default reducer;