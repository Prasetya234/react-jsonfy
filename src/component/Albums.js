import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

class Albums extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
      
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/albums';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }
      
    render(){
        const { data } = this.state;

        return(
            <div>
                <nav>
                    <Mui.AppBar position='static'>
                        <Mui.Toolbar>
                        <a href="#!" class="brand-logo right">Data Json Users</a>
                            <Mui.Typography variant="h6">
                                <div class="nav-wrapper">
                                    <ul class="left hide-on-med-and-down" varian>
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
                    <br/><h2>Data Json Albums</h2><br/>
                    <table>
                    <thead>
                        <tr class="card-panel red darken-1">
                            <td>id</td>
                            <td>title</td> 
                            <td>use_alb_fk</td>
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <tbody>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>  
                            <td>{todo.use_alb_fk}</td>  
                        </tr>
                    </tbody>
                )}
            </table>
                </Mui.Container>
            </div>
        )
    }
}
const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
export default Albums;