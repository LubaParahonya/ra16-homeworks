import React, { Component } from 'react'
import App from '../App'
import { v4 as uuid } from "uuid";



class Toolbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            filters: ['All', 'Websites', 'Flayers', 'Business Cards'],
        
        } 

    }
    render(){
        return (<>
       {this.state.filters.map(el => (<div className='filters' key={uuid()} onClick={()=> this.props.chooseProjects(el)}>{el}</div>))}
        </>)
    }
}

export default Toolbar
