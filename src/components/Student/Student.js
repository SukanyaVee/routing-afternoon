import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
    constructor() {
      super()
      this.state={
        studentInfo: []
      }

    }

    componentDidMount(){
      axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(resp=>{console.log('HI');this.setState({studentInfo:resp.data})}).catch(console.log)
    }

    render() {
      return (
        <div className="box">
          <h1>Student</h1>
          <i>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</i><br/><br/><br/>
          Grade: <h3>{this.state.studentInfo.grade}</h3>
          Email: <h3>{this.state.studentInfo.email}</h3>
        </div>
      )
    }
}