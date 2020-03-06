import React from 'react'
import axios from 'axios';
import DeletePlaylist from './DeletePlaylist'
import CreatePlaylist from './CreatePlaylist'
import DetailsPlaylist from './DetailsPlaylist';
import styled from 'styled-components'
const BaseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

const Container = styled.div`
display: flex;
`

class ViewPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPlaylist: []
        }
    }

    componentDidMount() {
        this.getAllPlaylist()

    }
    getAllPlaylist = async () => {
        let response = await axios.get(`${BaseUrl}/playlists/getAllPlaylists`,
            {
                headers: { 'auth': "felipe" }
            }
        )
        this.setState({ allPlaylist: response.data.result.list })
    }

    render() {
        return (
            <div>
                <CreatePlaylist
                    getAllPlaylist={this.getAllPlaylist}
                />
                <Container>
                    <span>Lista de Playlist</span>
                    {this.state.allPlaylist.map(el => {
                        return (<div
                            key={el.id}
                            >
                            {el.name}
                            <DeletePlaylist
                                value={el.id}
                                getAllPlaylist={this.getAllPlaylist}
                            >
                            </DeletePlaylist>
                            <DetailsPlaylist
                                value={el.id}
                            />
                        </div>)
                    })}
                </Container>
            </div>
        )
    }
}

export default ViewPlaylist

