import React from 'react'
import axios from 'axios'
import AddMusicInPlaylist from './AddMusicInPlaylist'

const BaseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"
class DetailsPlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist: [],
            showDetails: false

        }
    }
    hendleDetailsPlaylist = async (id) => {
        let response = await axios.get(`${BaseUrl}/playlists/getPlaylistMusics/${id}`,
            {
                headers: { 'auth': "felipe" }
            }
        )
        const aux = !this.state.showDetails
        this.setState({
            playlist: response.data.result.musics,
            showDetails: aux
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.hendleDetailsPlaylist(this.props.value)}>
                    Detalhes da Playlsit
                </button>

                {this.state.playlist.map(el => {
                    return (
                        <div key = {el.id}>
                            <p>{el.name}</p>
                            <p>{el.artist}</p>
                            <audio src={el.url} controls autoplay loop ></audio>
                        </div>
                    )
                })}
                {this.renderDetails}
                <AddMusicInPlaylist
                    value={this.props.value}
                    hendleDetailsPlaylist={this.hendleDetailsPlaylist} />
            </div>
        )
    }
}
export default DetailsPlaylist