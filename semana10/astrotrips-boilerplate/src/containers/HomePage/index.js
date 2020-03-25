import React from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from "../Router"


const HomePage = props => {
    const { goToLoginScreen, goToUserTripsScreen,tripes } = props
    console.log(tripes)
    return (
        <div>
            <button
                onClick={goToLoginScreen}
            >Area de login</button>
            <button
                onClick={goToUserTripsScreen}
            >Area de viagens</button>
        </div>
    )
}

const mapStateToProps = state =>({
    tripes: state.data
})

const mapDispatchToProps = dispatch => {
    return {
        goToLoginScreen: () => dispatch(push(routes.root)),
        goToUserTripsScreen: () => dispatch(push(routes.listUserTrips))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);