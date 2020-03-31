import React from "react"
import { connect } from "react-redux"
import { routes } from "../Router"
import { push } from 'connected-react-router'
import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField'
import { createNewTrip } from '../../actions/trips'
import styled from "styled-components"

let currentDate = new Date()
currentDate.setDate(currentDate.getDate() + 1);
currentDate = currentDate.toISOString().split('T')[0]

const WrapperContainer = styled.div`
display: flex;
align-items: center;
flex-direction:column;

`

const WrapperForm = styled.form`
display: flex;
flex-direction: column;
width: 60vw;
border: 1px solid black;
`
const planets = [
    { name: "planet", value: "Mercúrio", required: true, },
    { name: "planet", value: "Vênus", required: true, },
    { name: "planet", value: "Terra", required: true, },
    { name: "planet", value: "Marte", required: true, },
    { name: "planet", value: "Júpiter", required: true, },
    { name: "planet", value: "Saturno", required: true, },
    { name: "planet", value: "Urano", required: true, },
    { name: "planet", value: "Netuno", required: true, }

]

const dataForm = [
    {
        name: "name", label: "Nome da viagem",
        type: "text",
        required: true, pattern: "(.*[a-z]){5}",
        title: 'Tenha pelo menos 5 letras'
    },
    {
        name: "date", label: "Data da viagem"
        , type: "date", required: true,
        min: currentDate
    },
    {
        name: "description", label: "Descrição",
        type: "text", required: true,
        pattern: "(.*[a-z]){3}",

    },
    {
        name: "durationInDays", label: "Duração da viagem",
        type: "number",
        required: true, min: 50,
        title: "Viagem tem que ser superior a 50 dias"
    },

]
class CreateTripsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                planet: ''
            }
        }
    }

    handleFieldChange = e => {
        const { name, value } = e.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        const form = this.state.form
        if (form.planet === '') {
            alert('selecione um planeta')
        }

        const data =
        {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
        this.props.createNewTrip(data)
    }

    render() {
        return (
            <WrapperContainer>
                <h3>Crie uma nova viagem:</h3>
                <WrapperForm onSubmit={this.handleSubmit}>
                    {dataForm.map(field => {
                        return (<TextField
                            key={field.name}
                            label={field.label}
                            type={field.type}
                            value={this.state.form[field.name]}
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            onChange={this.handleFieldChange}
                            inputProps={{
                                pattern: field.pattern,
                                title: field.title,
                                min: field.min
                            }}
                        />)
                    })}

                    <select onChange={this.handleFieldChange}
                        name='planet'
                    >
                        <option
                            value=''
                        >Selecione um planeta</option>
                        {planets.map(planet => {
                            return (
                                <option
                                    key={planet.value}
                                >
                                    {planet.value}
                                </option>
                            )
                        })}
                    </select>

                    <Button color='primary' type="submit"> Enviar </Button>
                    <Button
                        color="secondary"
                        onClick = {this.props.goToAdmScreen}

                    >Voltar
                    </Button>
                </WrapperForm>
            </WrapperContainer>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        goToAdmScreen: () => dispatch(push(routes.admPage)),
        createNewTrip: (data) => dispatch(createNewTrip(data))
    }
}
export default connect(null, mapDispatchToProps)(CreateTripsPage)