import React, {Component} from 'react'
import FeaturedEvents from '../components/featuredEvent/FeaturedEvents'
import { connect } from 'react-redux'

class FeaturedEventContainer extends Component{


    render(){
        return(
            <div>
                <ol>
                    <FeaturedEvents events={this.props.events}/>
                </ol>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        events: state.events.events
    }
}

export default connect(mapStateToProps)(FeaturedEventContainer)

