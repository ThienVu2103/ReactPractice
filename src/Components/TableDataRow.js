import React, { Component } from 'react'

export default class TableDataRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editFormStatus: true
        }
    }

    editButton = () => {
        // this.setState({
        //     editFormStatus: !this.state.editFormStatus
        // })
        this.props.editFuncAtTableRow();
        this.props.changeEditUserStatus();
    }

    delButton = (idUser) => {
        this.props.getIdUserDel(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.count + 1}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.tel}</td>
                <td>{this.props.data.role}</td>
                <td>
                    <div
                        className="btn btn-warning sua"
                        onClick={() => this.editButton()}><i className="fa fa-edit">Edit</i></div>
                    <div
                        className="btn btn-danger sua"
                        onClick={() => this.delButton(this.props.data.id)}><i className="fa fa-trash" > Delete</i></div>
                </td>
            </tr>
        )
    }
}
