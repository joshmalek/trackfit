import React, {Component} from 'react';

export default class createExercise extends Component {
    constructor(props){
        //need to always call super when defining the constructor of a subclass
        super(props);
        //asserts that when a function calls this, it refers to the right this
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //a state is something that can be updated without page refresh
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    //when the username is changed, set the state
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    //when the description is changed, set the state
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    //when the duration is changed, set the state
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    //when the date is changed, set the state
    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);
        
        //sends us back to the list of exercises
        window.location = '/';
    }

    render() {
        return(
            <div>
                <p>You are on the Create Exercise component!</p>
            </div>
        )
    }
}