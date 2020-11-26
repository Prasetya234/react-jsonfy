import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Brands extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/brands';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <nav>
                    <Mui.AppBar>
                        <Mui.Toolbar>
                        <a href="#!" class="brand-logo right">Data Json Users</a>
                            <Mui.Typography variant="h6">
                                <div class="nav-wrapper red accent-4">
                                    <ul class="left hide-on-med-and-down">
                                        <li><a href="/">Users</a></li>
                                        <li><a href="/Comments">Comments</a></li>
                                        <li><a href="/Posts">Posts</a></li>
                                        <li><a href="/Albums">Albums</a></li>
                                        <li><a href="/Photos">Photos</a></li>
                                        <li><a href="/Categories">Categories</a></li>
                                        <li><a href="/Brands">Brands</a></li>
                                        <li><a href="/Items">Items</a></li>
                                    </ul>
                                </div>
                            </Mui.Typography>
                        </Mui.Toolbar>
                    </Mui.AppBar>
                </nav>
                <Mui.Container Fixed>
                <br/><h2>Data Json Brands</h2>
                    <table>
                    <thead>
                        <tr class="card-panel indigo">
                            <td>id</td>
                            <td>name</td> 
                            <td>logo_url</td>
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <tbody>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>  
                            <td>{todo.logo_url}</td> 
                        </tr>
                    </tbody>
                )}
            </table>
                </Mui.Container>
            </div>
        )
    }
}
    
export default Brands;