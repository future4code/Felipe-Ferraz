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


class ListTripsUserPage extends React.Component {

    componentDidMount() {
        this.props.getTrips()
    }
    render() {
            console.log(this.props.allTrips)
            return (
                <div>
                    <div>

                        {this.props.allTrips.map(el => {
                            return (
                                <Card key= {el.id}>
                                    <CardContent>
                                        <Typography color="textSecondary">
                                            {el.planet}
                                        </Typography>
                                        <Typography>
                                            {el.name}
                                        </Typography>
                                        <Typography>
                                            {el.date}
                                        </Typography>
                                        <Typography>
                                            {el.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small"
                                         onClick = {this.props.goToDetailScreen}
                                        id = {el.id}
                                        >Faça cadastro
                                       
                                        </Button>
                                    </CardActions>
                                </Card>
                            )
                        })}

                    </div>
                    <button
                        onClick={this.props.goToHomeScreen}
                    >Voltar</button>
                </div>
            )

        }
    }
    const mapDispatchToProps = dispatch => {
        return {
            goToHomeScreen: () => dispatch(push(routes.homeScreen)),
            goToDetailScreen: () => dispatch(push(routes.TripsDetails)),
            getTrips: () => dispatch(getTrips())
        }
    }

    const mapStateToProps = state => {
        return {
            allTrips: state.trips.trips
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(ListTripsUserPage)