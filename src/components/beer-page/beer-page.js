import React, { Component } from "react";
import './beer-page.css';
import Spinner from "../spinner";
import { connect } from 'react-redux';
import Row from "../row";
import {fetchAllBeer, getSomeBeer} from "../../actions";
import WithBtdService from "../../hoc";
import BeerList from "../beer-list";
import ErrorIndicator from "../error-indicator";
import BeerDetails from "../beer-details";

class BeerPage extends Component {
    componentDidMount() {
        this.props.fetchAllBeer();
    }

    render(){
        const {allBeer, loading, error, currentBeer, getSomeBeer} = this.props;
        if(error) {return(<ErrorIndicator/>)}
        if(loading){return <Spinner/>}
        return(
            <Row left={<BeerList allBeer={allBeer} getSomeBeer={getSomeBeer}/> } right={<BeerDetails currentBeer={currentBeer}/>}/>
        )

    }

}

const mapStateToProps = ({beer, loading, error, currentBeer}) => {
    return{
        allBeer: beer,
        loading,
        error,
        currentBeer
    }
}
const mapDispatchToProps = (dispatch, {btdService}) => {
    return{
        fetchAllBeer: fetchAllBeer(dispatch, btdService),
        getSomeBeer: (id) => {dispatch(getSomeBeer(id))}
    }
}

export default WithBtdService()(connect(mapStateToProps, mapDispatchToProps)(BeerPage));