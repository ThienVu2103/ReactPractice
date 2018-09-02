import React, { Component } from 'react';
export default class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    submitFunction = () => {

    }

    showForm = () => {

        if (this.props.flag) {
            return (
                <div className="col-12">
                    <form>
                        <div className="card text-white bg-warning mb-3 mt-2" >
                            <div className="card-header text-center">Add User</div>
                            <div className="card-body text-secondary">
                                <div className="card-body text-secondary">
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.isChange(event)} className="form-control" name="name" aria-describedby="helpId" placeholder="username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.isChange(event)} className="form-control" name="tel" aria-describedby="helpId" placeholder="phone number" />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" onChange={(event) => this.isChange(event)} name="role" >
                                            <option  >Choose...</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Mode</option>
                                            <option value={3}>Member</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input onClick={(name, tel, role) => this.props.addNewUser(this.state.name, this.state.tel, this.state.role)} type="reset" className="btn btn-block btn-primary" value="Add" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {

        return (
            <div >
                {this.showForm()}
            </div>
        )
    }
}
