import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class exerciseList extends Component {
    constructor(props){
        //need to always call super when defining the constructor of a subclass
        super(props);
        //asserts that when a function calls this, it refers to the right this
        this.deleteExercise = this.deleteExercise.bind(this);
        //a state is something that can be updated without page refresh
        this.state = {
            exercises: []
        }
    }

    componentDidMount(){
        //this code retrieves all of the exercises in the database when the page loads,
        //and displays them in the homepage in a list
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({
                    exercises: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data));
        //whenever state is updated, page is refreshed so instead of doing another get call
        //to retrieve the new exercises list, we filter out the exercise ID we just deleted.
        //(efficiency maybe? saves hitting the server twice)

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }   

    render() {
        return(
            <div>
                <p>You are on the Exercise List component!</p>
            </div>
        )
    }
}