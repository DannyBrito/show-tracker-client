import React from 'react'
import {BASE_URL, DELETE_FETCH} from '../Constants'
import TvShowContainer from '../containers/TvShowContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class UserWatchList extends React.Component {
    state={
        tvshows:[]
    }

    handleClick = (e, id) =>{
        e.preventDefault()
        fetch(BASE_URL+`tvshows/${id}`,DELETE_FETCH)
        .then(res => res.json())
        .then(res =>{
            let tvshows = this.state.tvshows.filter(tv => tv.id !== res.id)
            this.setState({tvshows})
        })
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
                    <TvShowContainer changeDisplay={this.props.changeDisplay}handleClick={this.handleClick} btText="delete"tvShows={this.state.tvshows}/>
                </Row>
            </>
        )
    }

} 

export default UserWatchList