import React from 'react'
import {BASE_URL} from '../Constants'
import TvShowContainer from '../containers/TvShowContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class UserWatchList extends React.Component {
    state={
        tvshows:[]
    }

    componentDidMount(){
        if(this.props.id){
            fetch(BASE_URL + `watchlists/${this.props.id}`)
            .then(res => res.json())
            .then(res =>{
                this.setState({tvshows:Object.values(res.tv_shows)})
            })
        }
    }
    render(){
        return(
            <>
                <Row>
                <h3 style={{paddingLeft:'445px',paddingTop:'10px'}}>Your WatchList</h3>
                </Row>
                <Row>
                    <TvShowContainer tvShows={this.state.tvshows}/>
                </Row>
            </>
        )
    }

} 

export default UserWatchList