import React from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import {BASE_URL, GET_FETCH} from '../Constants'
import TvShowContainer from './TvShowContainer'

class SerchContainer extends React.Component{
  state={
    tvshows:[]
  }
  componentDidMount(){
    const search = this.props.search.replace(/\s/g,'+')
    fetch(BASE_URL+`tv_shows/search/${search}`,GET_FETCH)
    .then(res => res.json())
    .then(res =>{
      this.setState({tvshows:res})
    })
  }
  render(){
    return (
    <>
      {this.props.search?
      <TvShowContainer tvShows={this.state.tvshows} />
      :
      <Redirect to="/"/>
      }
    </>
    );
  }
}

export default SerchContainer;