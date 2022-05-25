import React from 'react'
import CountryComponent from '../components/CountryComponent'

class Countrylist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            countries : props.countries
        }
    }
    render() {
        return (
            <div>
                <h1 className='text-xl font-bold text-center my-4'>List of Countries</h1>
                <div className='flex justify-center'>
                    <CountryComponent onDetailsClick={this.props.onDetailsClick} countries={this.state.countries} det='capital'/>    
                </div>
            </div>
        )
    }
}

export default Countrylist
