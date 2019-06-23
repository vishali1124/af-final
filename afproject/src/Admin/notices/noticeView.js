import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditNotices from "./noticeEdit";

class ViewNotices extends Component{
    next = function(e){
        ReactDOM.render(<EditNotices />, document.getElementById('root'));
    };
    render() {
        return(
            <div>
                <Card.Body>
                    <Card.Title>View Notices</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Notices ID</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>A001</th>
                            <th>aaaa</th>
                            <td><Button variant="success" onClick={e => this.next(e)}>Edit</Button></td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>

                        </tbody>
                    </Table>
                </Card.Body>
            </div>
        )
    }
}

export default ViewNotices;