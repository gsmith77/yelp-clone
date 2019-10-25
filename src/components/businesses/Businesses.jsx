import './businessDisplay.css'
import React, {Component} from 'react'
import Business from './Business'

export default class Businesses extends Component {
    
    render(){
        const generateBusinesses = () => {
            return this.props.businesses.map(business => {
                return <Business key={business.id} business= {business} fetchReviews={this.props.fetchReviews}/>
            })
        }

        return (
            <React.Fragment>
                <ol className="list-of-businesses" style={{margin: 10}}>
                    {generateBusinesses()}
                </ol>
            </React.Fragment>            
        )
    }

}