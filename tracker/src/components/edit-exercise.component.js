import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


export default class editExercise extends Component {
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

    //React lifecycle function, will auto be called before anything is loaded onto the page
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    username: response.data.description,
                    username: response.data.duration,
                    username: new Date(response.data.date)
                })
            })
        //this code retrieves all of the usernames in the database when the page loads,
        //and displays them in the form to select from when creating an exercise
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }
            })
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

        axios.post("http://localhost:5000/exercises/add",exercise)
            .then(res => console.log(res.data));
        
        //sends us back to the list of exercises
        window.location = '/';
    }

    render() {
        return(
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                //returns an option for every user in the mongo database
                                this.state.users.map(function(user){
                                    return <option key={user} value={user}>{user}
                                        </option>;
                                })
                            }
                            </select>
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}