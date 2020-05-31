import React, {Component} from 'react';

export default class createUser extends Component {
    constructor(props){
        //need to always call super when defining the constructor of a subclass
        super(props);
        //asserts that when a function calls this, it refers to the right this
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //a state is something that can be updated without page refresh
        this.state = {
            username: ''
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);
        
        //sends us back to the list of exercises
        this.setState({
            username: ''
        });
    }


    render() {
        return(
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}