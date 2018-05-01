import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
    
  }
  componentDidMount(){
    // console.log(this.props.match.params.class)
    axios.get(`http://localhost:3005/students?class=` + this.props.match.params.class)
    .then( (element) => {
      this.setState({ students: element.data }) 
      // console.log(element.data)
    })
    // axios.get(this.props.match)
  }

  render() {
    let list = this.state.students.map( (element) => {
      return (<Link key={element.id} to={`/student/${element.id}`}><h3>{`${element.first_name} ${element.last_name}`}</h3></Link>
        // {console.log()}
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
            {list}
      </div>
    )
  }
}