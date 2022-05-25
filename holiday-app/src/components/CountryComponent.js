import React from 'react'

class CountryComponent extends React.Component {
    constructor(props){
        super(props)
        this.countries = [...props.countries]
        this.det = props.det

        this.handleClickCountry = this.handleClickCountry.bind(this)
    }

    handleClickCountry = (e) => {
        this.props.onDetailsClick(e)
    }

    render() {
        return (
            <div className='flex flex-wrap justify-center p-4 w-1/2 border-t border-b'>
                {
                    this.det === 'capital' ? 
                    this.countries.map((country) =>
                        <Card2 onclick={(e) => this.handleClickCountry(country.name, e)} key={country.name} det={this.det} country={country} />
                    ) 
                    : this.countries.map((country) =>
                        <Card onclick={(e) => this.handleClickCountry(country.name, e)} key={country.name} det={this.det} country={country} />
                    )
                }
            </div>
        )
    }
}

const Card = (props) => {
    const ket = {
        population : 'people',
        area: 'km'
    }
    return (
        <button onClick={props.onclick} className='text-center my-4 bg-green-400 w-48 p-2 mx-2'>
            <h1 className='text-xl font-bold text-white my-2'>{props.country.name}</h1>
            <p className='text-md text-white'>{props.country.details[props.det].toLocaleString()}</p>
            <h4 className='text-lg font-bold text-white mb-2'>
                {ket[props.det]}
                {props.det === 'area' ? <sup>2</sup> : <sup></sup>}
            </h4>
        </button>
    )  
}

const Card2 = (props) => {
    return (
        <button onClick={props.onclick} className='text-center my-4 bg-green-400 w-48 p-2 mx-2'>
            <h1 className='text-xl font-bold text-white my-2'>{props.country.name}</h1>
            <h4 className='text-lg font-bold text-white'>{props.det}</h4>
            <p className='text-md text-white'>({props.country.details[props.det]})</p>
        </button>
    )  
}

export default CountryComponent
