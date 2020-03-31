import React from 'react'
import { connect } from 'react-redux'
import { routes } from '../Router'
import { push } from 'connected-react-router'

class AproveTripsPage extends React.Component {

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(token === null){
            this.props.goToLoginScreen()
        }
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.props.goToAdmScreen}
                >Voltar</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToAdmScreen: () => dispatch(push(routes.admPage)),
        goToLoginScreen: () => dispatch(push(routes.root))
    }
}

export default connect(null, mapDispatchToProps)(AproveTripsPage)