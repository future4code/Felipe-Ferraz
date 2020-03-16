import React from 'react'
import axios from 'axios'

const BaseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

class AddMusicInPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
            MusicName: '',
            artistName: '',
            urlMusic: ''
        }
    }
    hendleAddMusic = async (id) => {
        const dadosMusic = {
            playlistId: id,
            music: {
                name: this.state.MusicName,
                artist: this.state.artistName,
                url: this.state.urlMusic
            }

        }
        try {
            let response = await axios.put(`${BaseUrl}/playlists/addMusicToPlaylist`, dadosMusic,
                {
                    headers: { 'auth': 'felipe' }
                },
            )
            this.setState({
                showInput: false,
                MusicName: '',
                artistName: '',
                urlMusic: ''
            })
            this.props.hendleDetailsPlaylist(id)
        } catch (error) {
            console.log(error)
        }
    }

    openInputs = () => {
        let newShowInput = !this.state.showInput
        this.setState({ showInput: newShowInput })
    }

    hendleMusicName = (event) => {
        const newValue = event.target.value
        this.setState({ MusicName: newValue })
    }

    hendleBandName = (event) => {
        const newValue = event.target.value
        this.setState({ artistName: newValue })
    }

    hendleUrlMusic = (event) => {
        const newValue = event.target.value
        this.setState({ urlMusic: newValue })
    }

    renderInputs = () => {
        const inputs = this.state.showInput ?
            <div>
                <input
                    onChange={this.hendleMusicName}
                    placeholder='Nome da música'>

                </input>
                <input
                    onChange={this.hendleBandName}
                    placeholder='Banda'>

                </input>
                <input
                    onChange={this.hendleUrlMusic}
                    placeholder='url da música'>

                </input>
                <button
                    onClick={() => this.hendleAddMusic
                        (this.props.value)}
                >Adicioanr Musica
                </button>
            </div> : ''
        return inputs
    }

    render() {

        return (
            <div>
                <button onClick={this.openInputs}>
                    Adicionar música na Playlist
            </button>
                {this.renderInputs()}

            </div>
        )
    }
}

export default AddMusicInPlaylist