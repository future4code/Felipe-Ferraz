import React, { useImperativeHandle } from 'react'
import { connect } from 'react-redux'
import { routes } from "../Router"
import { push } from 'connected-react-router'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const Wrapper = styled.div`
height:80vh;
display: flex;
align-items: center;
flex-direction:column;
justify-content: space-around;
`

class AdmPage extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToHomeScreen() //Como usar desestruturação para ter acesse aqui?
        }
    }

    handleLogout = () => {
        localStorage.removeItem('token')
        this.props.goToHomeScreen()
    }

    render() {
        const { goToCreateTripsScreen, goToListTripsScreen,
            goToAproveTripsScreen} = this.props
        return (
            <div>
                <Menu />
                <Wrapper>
                    <h1>Bem vindo Adm</h1>
                    <Button
                        color='inherit'
                        variant="outlined"
                        onClick={goToCreateTripsScreen}
                    >Criar viagem</Button>
                    <Button
                        color='inherit'
                        variant="outlined"
                        onClick={goToListTripsScreen}
                    >Lista viagens</Button>
                    <Button
                        color='inherit'
                        variant="outlined"
                        onClick={goToAproveTripsScreen}
                    >Aprovar viagens</Button>
                    <Button
                        color='secondary'
                        variant="outlined"
                        onClick={this.handleLogout}
                    >Deslogar</Button>
                </Wrapper>
                <Footer />

            </div>
        )

    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToCreateTripsScreen: () => dispatch(push(routes.createTrips)),
        goToListTripsScreen: () => dispatch(push(routes.listAdmTrips)),
        goToAproveTripsScreen: () => dispatch(push(routes.aproveTrips)),
        goToHomeScreen: () => dispatch(push(routes.homeScreen)),

    }
}

export default connect(null, mapDispatchToProps)(AdmPage)