
import React from 'react'

import Countries from './models/CountryContext'

import Home from './pages/Home'
import CountryList from './pages/CountryList'
import CountryDetails from './pages/CountryDetails'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      page : "home",
      countries : Countries,
      pageHistory: [],
      pageDetailsHistory: [],
    }
  }

  handleClickNav = (page) => {
    if(this.state.page === "details")
      this.setState({
        pageDetailsHistory: [...this.state.pageDetailsHistory, this.state.country]
      })
  
    this.setState({
      pageHistory: [...this.state.pageHistory, this.state.page],
      page : page,
    })
  }

  handleClickDetails= (data) => {
    this.setState({
      pageHistory: [...this.state.pageHistory, this.state.page],
      page: 'details',
      country: data,
    })
  }

  handleClickBack = () => {
    let pageHistory = [...this.state.pageHistory]
    let page = pageHistory.pop()

    if(page === "details"){
      let pageDetailsHistory = [...this.state.pageDetailsHistory]
      let country = pageDetailsHistory.pop()
      this.setState({
        pageHistory : pageHistory,
        pageDetailsHistory : pageDetailsHistory,
        page : page,
        country: country
      })
    }
    else  
      this.setState({
        pageHistory : pageHistory,
        page : page,
      })
  }

  render() {
    return (
      <div>
        <h1 className='text-3xl font-bold text-center my-4'>Fun Fact About Countries</h1>
        <div className='flex justify-center my-8'>
          {this.state.page !== 'home' ? <ButtonNav onclick={(e) => this.handleClickNav('home', e)} name="Go Back To Homepage"/> : ''}
          
          {this.state.page !== 'list' ? <ButtonNav onclick={(e) => this.handleClickNav('list', e)} name="List of All Countries"/>: ''}
        </div>
        { 
          this.state.page === 'home' ? 
            <Home onDetailsClick={this.handleClickDetails} countries={this.state.countries} /> 
          : this.state.page === 'list' ? 
            <CountryList onDetailsClick={this.handleClickDetails} countries={this.state.countries} /> 
          : this.state.page === 'details' ? 
            <CountryDetails country={this.state.countries.filter(a => a.name === this.state.country)} /> 
          : ''
        }
        <div className='flex justify-center my-4'>
          {this.state.pageHistory.length ? <ButtonNav onclick={this.handleClickBack} name="Back" /> : ''}
        </div> 
      </div>
      
    )
  }
}

const ButtonNav = (props) => {
  return(
    <button onClick={props.onclick} className='mx-4 bg-black py-2 px-4 text-white rounded-md hover:opacity-50'>{props.name}</button>
  )
}

export default App
