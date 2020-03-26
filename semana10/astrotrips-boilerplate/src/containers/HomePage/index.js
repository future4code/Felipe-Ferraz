import React from 'react'
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from "../Router"
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const WrapperArea = styled.div`
width:100vw;
height: 80vh;
display: flex;
flex-direction:column;
align-items: center;
background-color: #DEDEDE;

`
const Logo = styled.img`
margin-top: 5vh;
height: 50vh;
width: 60vw;
border-radius: 15px;
box-shadow: 2px 2px 3px;
`
const WrapperButton = styled.div`
width: 60vw;
display: flex;
justify-content:space-between;
margin: 5vh;

`
const HomePage = props => {
    const { goToLoginScreen, goToUserTripsScreen } = props
    return (
        <div>
            <Menu />
            <WrapperArea>

                <Logo
                    src={require('../../img/futurecar.png')}
                />
                <WrapperButton>
                    <Button variant="contained"
                        color='primary'
                        onClick={goToLoginScreen}
                    >Area de login</Button>
                    <Button variant="contained"
                        color='secondary'
                        onClick={goToUserTripsScreen}
                    >Area de viagens</Button>
                </WrapperButton>
            </WrapperArea>
            <Footer />
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        goToLoginScreen: () => dispatch(push(routes.root)),
        goToUserTripsScreen: () => dispatch(push(routes.listUserTrips))
    }
}

export default connect(null, mapDispatchToProps)(HomePage);