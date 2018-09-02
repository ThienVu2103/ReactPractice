import React, { Component } from 'react';

class SubAddUser extends Component {

    // This class show how to process with the same component. 
    // We use state to do this.
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false
        }
    }

    addFunction = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    showSubAddUser = () => {
        if (this.state.isToggle) {
            return <div className="btn btn-block btn-info" onClick={() => this.addFunction()} ><i className="fa fa-close" aria-hidden="true"></i> </div>
        } else {
            return <div onClick={() => this.addFunction()} className="btn btn-block btn-info" > <i className="fa fa-plus" ></i> </div>
        }
    }

    showForm = () => {
        if(this.state.isToggle) {
            return (
                <div className="card border-secondary mb-3" >
                    <div className="card-header">Add User</div>
                    <div className="card-body text-secondary">
                        <div className="card-body text-secondary">
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" aria-describedby="helpId" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="phone" aria-describedby="helpId" placeholder="phone number" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" >
                                    <option>Choose..</option>
                                    <option>Admin</option>
                                    <option>Mode</option>
                                    <option>Member</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="btn btn-block btn-primary">Add</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-3">

                {this.showSubAddUser()}
                {this.showForm()}
                
            </div>
        )
    }
}

export default SubAddUser;