import React from 'react'
import axios from 'axios'

const BaseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

class DeletePlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idPlaylistDelet: ''
        }
    }
    handleDeletePlaylist = async (id) => {
            let response = await axios.delete(`${BaseUrl}/playlists/deletePlaylist?playlistId=${id}`,
                {
                    headers: { 'auth': "felipe" }
                }
            )
            this.props.getAllPlaylist()       
    }

    render() {
        return (
            <button onClick={() => this.handleDeletePlaylist(this.props.value)}>
                Deletar Playlist
            </button>
        )
    }
}

export default DeletePlaylist   