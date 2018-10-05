import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class Wizard extends Component {
    constructor() {
        super();

    this.state = {
        propertyName: 'name',
        addres: 'address',
        city: 'city',
        State: 'state',
        zip: 0
    }

    // this.propertyName = this.propertyName.bind(this);
    // this.address = this.address.bind(this);
    // this.city = this.city.bind(this);
    // this.State = this.State.bind(this);
    // this.zip = this.zip.bind(this);

    // axios.post(`/`, )
    }
    


    render() {


        return (
        
            <div className='Wizard'>
                <Link to="/" button className='btn'>Cancel</Link>
                <div>Add New Listing</div>
                    <p className="form-wrap">
                        <input className="btn-sp" placeholder="Property Name" ref = {
                            propertyName => {
                                this.propertyName = propertyName;
                            }}
                            />
                        <input className="btn-sp" placeholder="Address" ref={
                            address => {
                                this.address = address;
                            }}
                            />
                        <input className="btn-sp" placeholder="City" ref={
                            city => {
                                this.city = city;
                            }}
                            />
                        <input className="btn-sp" placeholder="State" ref={
                            State => {
                                this.State = State;
                            }}
                            />
                        <input className="btn-sp" placeholder="Zip" ref={
                            zip => {
                                this.zip = zip;
                            }}
                            />
                    </p>
            </div>
        )
    }
}

