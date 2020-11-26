import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Comments extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/comments';
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
                <br/><h2>Data Json Comments</h2><br/>
                <table>
                    <thead>
                        <tr class="card-panel indigo">
                            <td>id</td>
                            <td>use_pos_fk</td> 
                            <td>pos_com_fk</td>
                            <td>comment</td> 
                            <td >date_add</td>
                            <td>date_upd</td>
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <tbody>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.use_pos_fk}</td> 
                            <td>{todo.pos_com_fk}</td>
                            <td>{todo.comment}</td> 
                            <td>{todo.date_add}</td>     
                            <td>{todo.date_upd}</td>
                        </tr>
                    </tbody>
                    )}
                </table>
                </Mui.Container>
            </div>
        )
    }
}
    
export default Comments;