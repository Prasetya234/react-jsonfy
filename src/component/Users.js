import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

class Users extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/users';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to Elevate App Bar</Typography>
          </Toolbar>
        </AppBar>
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
                    <Mui.Paper class="card-panel amber">
                <h2>Data Json Users</h2>
                </Mui.Paper><br/>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                        <TableRow class="card-panel indigo">
                            <TableCell align="left">id</TableCell>
                            <TableCell align="left">name</TableCell>
                            <TableCell align="left">username</TableCell>
                            <TableCell align="left">email</TableCell>
                            <TableCell align="left">password</TableCell>
                            <TableCell align="left">age</TableCell>
                            <TableCell align="left">website</TableCell>
                            <TableCell align="left">phone</TableCell>
                            <TableCell align="left">date_add</TableCell>
                            <TableCell align="left">date_upd</TableCell>
                            <TableCell align="left">password_md5</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map(todo =>
                            <TableRow key={todo.id}>
                            <TableCell component="th" scope="row">
                                {todo.id}
                            </TableCell>
                            <TableCell align="left">{todo.id}</TableCell>
                            <TableCell align="left">{todo.name}</TableCell>
                            <TableCell align="left">{todo.username}</TableCell>
                            <TableCell align="left">{todo.email}</TableCell>
                            <TableCell align="left">{todo.password}</TableCell>
                            <TableCell align="left">{todo.age}</TableCell>
                            <TableCell align="left">{todo.website}</TableCell>
                            <TableCell align="left">{todo.phone}</TableCell>
                            <TableCell align="left">{todo.date_add}</TableCell>
                            <TableCell align="left">{todo.date_upd}</TableCell>
                            <TableCell align="left">{todo.password_md5}</TableCell>
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Mui.Container>
            </div>
        )
    }
}
    
export default Users;