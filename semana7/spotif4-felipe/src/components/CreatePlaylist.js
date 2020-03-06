import React from 'react'
import axios from 'axios';

const BaseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"
let numberStatus

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPlaylistName: '',
        }

    }

    hendlePlaylistName = (e) => {
        const newValue = e.target.value
        this.setState({ newPlaylistName: newValue })
    }

    newPlaylist = async () => {
        try {
            const playlistName = { name: this.state.newPlaylistName }
            let response = await axios.post(`${BaseUrl}/playlists/createPlaylist`, playlistName,
                {
                    headers: { 'auth': "felipe" }
                })
            alert('Playlist criada com sucesso')
            numberStatus = response.status
            console.log(numberStatus)
        } catch (error) {
            console.log(error.message)
        }
        this.setState({
            newPlaylistName: '',
        })
        this.props.getAllPlaylist()
    }

    render() {
        return (
            <div>
                <h3>Crie sua playslit</h3>
                <input
                    value={this.state.newPlaylist}
                    onChange={this.hendlePlaylistName}
                    placeholder="digite o nome da playlist">
                </input>
                <button onClick={this.newPlaylist}>Criar playslit</button>
            </div>
        )
    }
}

export default CreatePlaylist