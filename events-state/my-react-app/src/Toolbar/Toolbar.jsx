import React, { Component } from 'react'
import App from '../App'



class Toolbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            filters: ['All', 'Websites', 'Flayers', 'Business Cards']
        }

    }
    render(){
        return (<>
       {this.state.filters.map(el => (<div className='filters' key={el} onClick={()=> this.props.chooseProjects(el)}>{el}</div>))}
        </>)
    }
}

export default Toolbar
