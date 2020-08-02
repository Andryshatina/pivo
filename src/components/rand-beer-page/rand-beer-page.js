import React, {Component, Fragment} from "react";
import { fetchAllBeer, fetchSomeBeer } from "../../actions";
import WithBtdService from "../../hoc";
import {connect} from "react-redux";
import BeerDetails from "../beer-details";
import Spinner from "../spinner";
import {Link} from "react-router-dom";
import './rand-beer-page.css';

class RandBeerPage extends Component {
    state = {
        f: false
    }
    componentDidMount() {
        this.props.fetchSomeBeer();
    }
    setStateTrue = () => {
        this.setState({f:true})
    }
    render(){

        const {currentBeer} = this.props;
        if(this.props.loading === true) {
            return(<Spinner/>)
        }
        const liter = this.state.f ? howMuch() : null;
        return(
            <Fragment>
                <BeerDetails currentBeer={currentBeer}/>
                {liter}
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.setStateTrue}>Скільки?</button>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className='btn btn-secondary btn-lg btn-block'>Назад на головну</button>
                </Link>

            </Fragment>
        )
    }
}
const howMuch = () => {
    const randMas = [0.5, 1, 1.5, 2]
    let rand = randMas[Math.floor(Math.random()*4)];
    if(rand === 2){
        return(
            <p className='liter'>
                Ухх, {rand}л випало, нехай щастить)
            </p>
        )
    }
    return(
        <p className='liter'>
            Думаю, {rand}л буде в самий раз
        </p>
    )
}
const mapStateToProps = ({loading, currentBeer}) => {
    return{
        loading,
        currentBeer
    }
}
const mapDispatchToProps = (dispatch, {btdService}) => {
    return{
        fetchAllBeer: fetchAllBeer(dispatch, btdService),
        fetchSomeBeer: fetchSomeBeer(dispatch, btdService)
    }
}

export default WithBtdService()(connect(mapStateToProps, mapDispatchToProps)(RandBeerPage));