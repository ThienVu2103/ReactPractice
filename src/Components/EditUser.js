import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            role: this.props.userEditObject.role
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    EditUserFunction = () => {
        var user = {};
        user.id = this.props.userEditObject.id
        user.name = this.state.name;
        user.tel = this.state.tel;
        user.role = this.state.role;

        this.props.changeEditUserStatus();
        this.props.updateFunction(user);
    }

    render() {
        return (
            <div className="col-12">
                <form>
                    <div className="card border-secondary mb-3" >
                        <div className="card-header">Add User</div>
                        <div className="card-body text-secondary">
                            <div className="card-body text-secondary">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="username" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" className="form-control" name="tel" aria-describedby="helpId" placeholder="phone number" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.role} className="form-control" name="role" >
                                        <option >Choose...</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Mode</option>
                                        <option value="3">Member</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input onClick={() => this.EditUserFunction()} type="button" className="btn btn-block btn-primary" value="Update" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default EditUser;