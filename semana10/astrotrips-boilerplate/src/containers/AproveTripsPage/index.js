import React from 'react'
import { connect } from 'react-redux'
import { routes } from '../Router'
import { push } from 'connected-react-router'

const AproveTripsPage = props => {
    return (
        <div>
            <button
                onClick={props.goToAdmScreen}
            >Voltar</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        goToAdmScreen: () => dispatch(push(routes.admPage))
    }
}

export default connect(null, mapDispatchToProps)(AproveTripsPage)