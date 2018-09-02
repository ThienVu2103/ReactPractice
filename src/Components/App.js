import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import data from './Data.json'; // when load data from back-end it will be stored at app.js
const uuidv1 = require('uuid/v1');
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      data: [],
      txtSearch: " ",
      editUserStatus: false,
      userEditObject: {}
    }
  }

  componentWillMount = () => {
    if(localStorage.getItem("user") === null) {
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      var tmp = JSON.parse(localStorage.getItem("user"));
      
      this.setState({
        data: tmp
      })
    }
  }
  
  /**
   * getID and delete ID
   */
  getIdUserDel = (id) => {
    console.log(id);
    var tmp = this.state.data;
    tmp = tmp.filter(item => item.id !== id);
    this.setState({
      data: tmp
    });
    localStorage.setItem("user", JSON.stringify(tmp));
  }

  updateInfoUser = (user) => {
    console.log(user);
    this.state.data.forEach((value, key) => {
      if (value.id === user.id) {
        value.name = user.name;
        value.tel = user.tel;
        value.role = user.role;

      }
    })

    // this.setState({
    //   data: this.state.data
    // });
    localStorage.setItem("user", JSON.stringify(this.state.data));
  }

  changeState = () => {
    this.setState({
      flag: !this.state.flag
    })
  }

  getTxtSearch = (data) => {
    this.setState({
      txtSearch: data
    })
  }

  addNewUser = (name, tel, role) => {
    var user = {};
    user.id = uuidv1();
    user.name = name;
    user.tel = tel;
    user.role = role;
    this.state.data.push(user);
    // console.log(this.state.data)
    this.setState({
      data: this.state.data
    });
    localStorage.setItem("user", JSON.stringify(this.state.data));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }

  editUser = (data) => {
    console.log(data);
    this.setState({
      userEditObject: data
    });
  }

  render() {
    var ketqua = [];
    this.state.data.filter((value) => {
      if (value.name.trim().toLowerCase().search(
        this.state.txtSearch.trim().toLowerCase()) !== -1) {
        ketqua.push(value)
      }
      return ketqua;

    })

    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                updateFunction={(user) => this.updateInfoUser(user)}
                userEditObject={this.state.userEditObject}
                changeState={() => this.changeState()}
                flag={this.state.flag}
                getTxtSearch={(data) => this.getTxtSearch(data)}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()} />

              <TableData
                getIdUserDel = {(id) => this.getIdUserDel(id)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editFunc={(data) => this.editUser(data)}
                data={ketqua} />
              <AddUser
                addNewUser={(name, tel, role) => this.addNewUser(name, tel, role)}
                flag={this.state.flag} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



    // this.state.data.forEach(element => {
    //   if(element.name.indexOf(this.state.txtSearch) !== -1) { // nghiax laf tifm thaasy
    //     ketqua.push(element)
    //   }
    // });
    // this.state.data.filter()
    // this.state.data.filter((value) => {
    //   if (value.name.trim().toLowerCase().search(
    //     this.state.txtSearch.trim().toLowerCase()) !== -1) {
    //     ketqua.push(value)
    //   } return ketqua;
    // })

    // console.log(ketqua);