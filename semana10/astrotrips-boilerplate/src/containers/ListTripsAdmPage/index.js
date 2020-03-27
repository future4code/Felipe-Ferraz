import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { getTrips, getTripsDetail } from '../../actions/trips'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ListTripsAdmPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLoginScreen()
        }
        this.props.getTrips()
    }

    handleChange = event => {
        const { name, value } = event.target
        this.props.getTripsDetail(value)
    }

    renderTripDetail = () => {

    }


    render() {
    const candidates =  this.props.tripDatail.candidates ?
     ( this.props.tripDatail.candidates.map(el =>{return (<div>{el.name}</div>)})) :
      (<div>oi2</div>)
        return (
            <div>
                <select
                    name='id'
                    onChange={this.handleChange}
                >
                    {this.props.allTrips.map(el => {
                        return (
                            <option
                                value={el.id}
                            >
                                {el.name}
                            </option>
                        )
                    })}
                </select>
                 {candidates}
               
                <button
                    onClick={this.props.goToAdmScreen}
                >Voltar</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allTrips: state.trips.trips,
        tripDatail: state.trips.tripDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToAdmScreen: () => dispatch(push(routes.admPage)),
        goToLoginScreen: () => dispatch(push(routes.root)),
        getTrips: () => dispatch(getTrips()),

        getTripsDetail: (id) => dispatch(getTripsDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsAdmPage)