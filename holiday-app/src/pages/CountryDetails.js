import React from 'react'

class CountryDetails extends React.Component {
    constructor(props){
        super(props)
        this.country = props.country[0]
    }
    render() {
        return (
            <div>
                <h1 className='text-xl font-bold text-center my-4'>{this.country.name}</h1>
                <div className='flex justify-center'>
                <table className="text-left">
                    <tbody>
                    <tr className="p-2">
                        <th className="p-2 w-32">Capital:</th>
                        <td className="p-2">{this.country.details.capital}</td>
                    </tr>
                    <tr>
                        <th className="p-2 w-32">Area:</th>
                        <td className="p-2">{this.country.details.area.toLocaleString()} km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <th className="p-2 w-32">Population:</th>
                        <td className="p-2">{this.country.details.population.toLocaleString()} people</td>
                    </tr>
                    <tr>
                        <th className="p-2 w-32">Gdp:</th>
                        <td className="p-2">{this.country.details.gdp} Trilliun</td>
                    </tr>
                    <tr>
                        <th className="p-2 w-32">Currency:</th>
                        <td className="p-2">{this.country.details.currency[1]}</td>
                    </tr>
                    </tbody>
                </table>    
                </div>
            </div>
        )
    }
}

export default CountryDetails
