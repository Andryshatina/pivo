const allBeerRequested = () => {
    return {
        type: 'FETCH_ALL_BEER_REQUEST'
    }
}
const someBeerRequested = () => {
    return {
        type: 'FETCH_SOME_BEER_REQUEST'
    }
}
const allBeerLoaded = (allBeer) => {
    return {
        type: 'FETCH_ALL_BEER_SUCCESS',
        payload: allBeer
    }
}
const someBeerLoaded = (someBeer) => {
    return {
        type: 'FETCH_SOME_BEER_SUCCESS',
        payload: someBeer
    }
}
const beerError = (error) => {
    return{
        type: 'FETCH_BEER_FAILURE',
        payload: error
    }
}
const getSomeBeer =  (id) => {
    return{
        type: 'SOME_BEER_REQUEST',
        payload: id
    }
}

const fetchAllBeer = (dispatch, btdService) => () => {
    dispatch(allBeerRequested());
    btdService
        .getData()
        .then((data) => {
            dispatch(allBeerLoaded(data));
        })
        .catch((error) => dispatch(beerError(error)));
}
const fetchSomeBeer = (dispatch, btdService) => () => {
    dispatch(someBeerRequested());
    btdService
        .getSomeData()
        .then((data) => {
            dispatch(someBeerLoaded(data));
        })
        .catch((error) => dispatch(beerError(error)));
}

export {fetchAllBeer, fetchSomeBeer, getSomeBeer};