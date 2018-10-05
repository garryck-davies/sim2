import React, { Component } from "react";
import House from '../House/House';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default class Dashboard extends Component {

    render() {

        return (
            <div>
                <div className='Dashboard'>Dashboard</div>
                <Link to="/wizard" button className='btn'>Add New Property</Link>
                <House />
            </div>
        )
    }
}
