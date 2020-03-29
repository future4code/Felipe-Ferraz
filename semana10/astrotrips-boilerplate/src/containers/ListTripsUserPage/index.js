import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { getTrips } from '../../actions/trips'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const Wrapper = styled.div`
display:flex;
flex-direction:column;
width: 70vw;
margin: auto;

`



class ListTripsUserPage extends React.Component {

    componentDidMount() {
        this.props.getTrips()
    }
    render() {
            return (
                <div>
                    <Wrapper>

                        {this.props.allTrips.map(el => {
                            return (
                                <Card key= {el.id}>
                                    <CardContent>
                                        <Typography color="textSecondary" variant = 'h4'>
                                            {el.planet}
                                        </Typography>
                                        <Typography component = "h1" variant = 'h5'>
                                            {el.name}
                                        </Typography>
                                        <Typography variant = "h6" >
                                            {el.date}
                                        </Typography>
                                        <Typography  Typography variant = "headline" component="p" >
                                            {el.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="large"
                                         onClick = {this.props.goToRegisterUserScreen}
                                        id = {el.id}
                                        color = 'primary'
                                        >Faça cadastro
                                       
                                        </Button>
                                    </CardActions>
                                </Card>
                            )
                        })}

                    </Wrapper>
                    <Button 
                        color = 'secondary' size="large"
                        onClick={this.props.goToHomeScreen}
                    >Voltar
                    </Button>
                </div>
            )

        }
    }
    const mapDispatchToProps = dispatch => {
        return {
            goToHomeScreen: () => dispatch(push(routes.homeScreen)),
            goToRegisterUserScreen: () => dispatch(push(routes.registerUser)),
            getTrips: () => dispatch(getTrips())
        }
    }

    const mapStateToProps = state => {
        return {
            allTrips: state.trips.trips
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(ListTripsUserPage)