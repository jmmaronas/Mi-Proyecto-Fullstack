import { useState, useEffect } from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { getMunicipios, getProvincias } from '../../services/api.js';
import CartDetail from '../Cart/CartDetail.js';
import FormUser from '../FormUser/FormUser.js';
import { Link } from 'react-router-dom';

export default function Checkout() {
    
    return (
        <div className="container-fluid">
            <h1 className='text-center my-5'>Finalizando la compra</h1>
            <div className='d-flex justify-content-around flex-wrap'>
                <div className='col-md-5 fs-sm-5'>
                    <h3 className='text-center mb-5'>Detalle de la compra</h3>
                    <CartDetail/>
                </div>
                <div className='col-md-5'>                    
                    <FormUser/>
                    <Link to="/login" className='d-block text-center my-2'>or login</Link>
                </div>
            </div>
        </div>
    );
}

