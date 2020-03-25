import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'

const ListTripsUserPage = props => {
    return (
        <div>
            <button
                onClick={props.goToHomeScreen}
            >Voltar</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        goToHomeScreen: () => dispatch(push(routes.homeScreen))
    }
}

export default connect(null, mapDispatchToProps)(ListTripsUserPage)