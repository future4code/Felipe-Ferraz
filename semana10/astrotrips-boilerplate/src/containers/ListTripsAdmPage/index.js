import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'

const ListTripsAdmPage = props => {
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

export default connect(null, mapDispatchToProps)(ListTripsAdmPage)