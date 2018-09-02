import React, { Component } from 'react'
import TableDataRow from './TableDataRow';

export default class TableData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            data: this.props.data
        }
    }

    midEditFunction = (data) => {
        this.props.editFunc(data);
    }

    loadData = () => this.props.data.map((value, index) => {
        
        return (
            // <tr>
            //     <td>0</td>
            //     <td>{value.name}</td>
            //     <td>{value.tel}</td>
            //     <td>{value.role}</td>
            //     <td>
            //         <div className="btn btn-warning sua"><i className="fa fa-edit    "> Edit </i></div>
            //         <div className="btn btn-danger sua"><i className="fa fa-trash    "> Delete</i></div>
            //     </td>
            // </tr>
            <TableDataRow 
                getIdUserDel={(id) => this.props.getIdUserDel(id)}
                changeEditUserStatus = {() => this.props.changeEditUserStatus()} 
                editFuncAtTableRow={(data) => this.midEditFunction(value)} 
                data={value} key={index} count={index}/>
        )
    })



    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover table-inverse ">
                    <thead className="thead-inverse|thead-default">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.loadData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
