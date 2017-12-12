import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res=>this.setState({students: res.data})).catch(console.log)
  }


  render() {
    var students=this.state.students.map((stud, ind) =>{return(<Link to={`/student/${stud.id}`} key={ind}><h3>{stud.first_name} {stud.last_name}</h3></Link>)})

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
    
}