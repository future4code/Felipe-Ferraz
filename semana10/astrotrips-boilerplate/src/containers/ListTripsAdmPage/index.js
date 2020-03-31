import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { getTrips, getTripsDetail } from '../../actions/trips'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';




class ListTripsAdmPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLoginScreen()
        }
        this.props.getTrips()
    }

    handleChange = event => {
        const { value } = event.target
        this.props.getTripsDetail(value)
    }
    renderCandidates = () => {
        const candidates =
            (this.props.tripDatail.candidates.map(candidate => {
                return (
                    <TableBody>
                        <TableCell key={candidate.id}>
                            {candidate.name}
                        </TableCell>
                        <TableCell>{candidate.profession}</TableCell>
                        <TableCell>{candidate.age}</TableCell>
                        <TableCell>{candidate.country}</TableCell>
                        <TableCell>{candidate.applicationText}</TableCell>
                    </TableBody>
                )
            }))
        return candidates
    }

    render() {
        const detail = this.props.tripDatail
        console.log(detail)

        return (
            <div>

                <select
                    name='id'
                    onChange={this.handleChange}
                >   <option>Selecione uma viagem</option>
                    {this.props.allTrips.map(el => {
                        return (
                            <option
                                value={el.id}
                            >
                                {el.name}
                            </option>
                        )
                    })}
                </select>
                {detail.name &&
                    <Paper key={detail.id}>
                        <Typography align='center' color='textPrimary'>
                            Nome da viagem: {detail.name}
                        </Typography>
                        <Typography align='justify'>
                            Detalhes : {detail.description}
                        </Typography>
                        <Typography align='justify'>
                            Planeta : {detail.planet}

                        </Typography>
                        <Typography align='justify'>
                            Data :{detail.date}
                        </Typography>
                        <Typography >
                            Dias de duração :{detail.durationInDays}
                        </Typography>
                    </Paper>
                }
                {detail.candidates &&
                    <div>
                        <h4>Candidatos :</h4>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell >Profissão</TableCell>
                                    <TableCell >Idade</TableCell>
                                    <TableCell >País</TableCell>
                                    <TableCell >Porque quer viajar</TableCell>
                                </TableRow>
                            </TableHead>
                            {this.renderCandidates()}
                        </Table>
                    </div>}


                <Button
                color = 'secondary'
                onClick={this.props.goToAdmScreen}
                >Voltar</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allTrips: state.trips.trips,
        tripDatail: state.trips.tripDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToAdmScreen: () => dispatch(push(routes.admPage)),
        goToLoginScreen: () => dispatch(push(routes.root)),
        getTrips: () => dispatch(getTrips()),

        getTripsDetail: (id) => dispatch(getTripsDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsAdmPage)