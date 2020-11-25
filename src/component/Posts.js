import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Posts extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/posts';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <nav>
                    <div class="nav-wrapper red accent-4">
                    <a href="#!" class="brand-logo center">Data Json Posts</a>
                    <ul class="left hide-on-med-and-down">
                        <li><a href="/">Users</a></li>
                        <li><a href="/Comments">Comments</a></li>
                        <li class="active"><a href="/Posts">Posts</a></li>
                    </ul>
                    </div>
                </nav>
                <Mui.Container Fixed>
                <h2>Data Json Posts</h2><br/>
                <table>
                    <thead>
                        <tr class="card-panel indigo">
                            <td>id</td>
                            <td>use_pos_fk</td> 
                            <td>title</td>
                            <td>body</td> 
                            <td >date_add</td>
                            <td>date_upd</td>
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <tbody>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.use_pos_fk}</td> 
                            <td>{todo.title}</td>
                            <td>{todo.body}</td> 
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
    
export default Posts;