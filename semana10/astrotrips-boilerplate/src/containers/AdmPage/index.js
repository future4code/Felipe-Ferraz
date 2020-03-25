import React from 'react'
import {connect} from 'react-redux'
import {routes} from "../Router"
import {push} from 'connected-react-router'
const AdmPage = props =>{
    const {goToCreateTripsScreen, goToListTripsScreen,
        goToAproveTripsScreen,goToHomeScreen} = props
    return(
        <div>
            <button
            onClick = {goToCreateTripsScreen}
            >Criar viagem</button>
            <button
            onClick = {goToListTripsScreen}
            >Lista viagens</button>
            <button
            onClick = {goToAproveTripsScreen}
            >Aprovar viagens</button>
            <button
            onClick = {goToHomeScreen}
            >Deslogar</button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        goToCreateTripsScreen : () =>dispatch (push(routes.createTrips)),
        goToListTripsScreen : () =>dispatch (push(routes.listAdmTrips)),
        goToAproveTripsScreen : () =>dispatch (push(routes.aproveTrips)),
        goToHomeScreen : () =>dispatch (push(routes.homeScreen)),

    }
}

export default connect(null, mapDispatchToProps)( AdmPage)