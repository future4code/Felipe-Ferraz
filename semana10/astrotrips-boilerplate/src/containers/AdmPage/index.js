import React from 'react'
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


const AdmPage = props => {
    const { goToCreateTripsScreen, goToListTripsScreen,
        goToAproveTripsScreen, goToHomeScreen } = props

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
                    color='inherit'
                    variant="outlined"
                    onClick={goToHomeScreen}
                >Deslogar</Button>
            </Wrapper>
            <Footer />

        </div>
    )
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