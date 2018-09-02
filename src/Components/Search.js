import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: "",
            userUpdate: {}
        }
    }
    
    getUserUpdate = (user) => {
        this.props.updateFunction(user)
        this.setState({
            userUpdate: user
        })
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus) {
            return  <EditUser 
                        userEditObject={this.props.userEditObject} 
                        changeEditUserStatus={() => this.props.changeEditUserStatus()} 
                        updateFunction={(user) => this.getUserUpdate(user)}/>
        }
    }
    showButton = () => {
        if (this.props.flag) {
            return <div className="btn btn-block btn-info" onClick={() => this.props.changeState()} ><i className="fa fa-close" aria-hidden="true"></i> </div>
        } else {
            return <div className="btn btn-block btn-info" onClick={() => this.props.changeState()} > <i className="fa fa-plus" ></i> </div>
        }
    }

    getSearchValue = (event) => {
        this.setState({
            txtSearch: event.target.value
        })
        this.props.getTxtSearch(this.state.txtSearch)
    }
    searchUser = () => {
        
    }
    render() {
        return (
            <div className="col-12">
            <div className="row">
               {this.isShowEditForm()}
            </div>
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event) => this.getSearchValue(event)} type="text" name="search" className="form-control" placeholder="Searching" aria-describedby="helpId" style={{ width: 500 }} />
                        <button type="submit" className="btn btn-info" onClick={(txtSearch) => this.props.getTxtSearch(this.state.txtSearch)}>Search</button>
                    </div>
                    <div className="btn-group1">
                        <br />
                        {this.showButton()}
                    </div>
                </div>
            </div>

        )
    }
}
