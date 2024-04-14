import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './MyCard.css';
import Navbar from 'react-bootstrap/Navbar';
import { Menubar } from 'primereact/menubar';

import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';

import { Image } from 'primereact/image';
        
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/js/bootstrap.bundle'

import 'primeicons/primeicons.css';

class MyCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=[
          // header = this.head,
           //  footer = this.foot
        ];
        //this.head=this.header.bind(this);
        //this.foot=this.footer.bind(this);
    }

    header()
    {
        return (
            <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
        );
    }
    footer()
    {
        return(
            <>
                    <Button label="Save" icon="pi pi-check" />
                    <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
                </>
        )
    }
    render()
    {
        return(
            
            <>
            {
                this.props.isProducts &&
                <>
                <div className="card flex justify-content-center">
            <Image  alt="Image" width="250" />
        </div>
                <Card title="Product Name"   className=" MyCardClass">
                <p className="mx-auto ">
                    {this.props.data}
                </p>
                <i class="pi pi-indian-rupee"></i> {this.props.price}
                <div class="row">
                    <div class="col-sm-5">
                    <Button variant="primary">Add To Cart</Button>
                </div>
                </div>
                <br/>
                <Divider/>
            </Card>
            </>
            }
            {
                this.props.isClass &&
                <>
                <div className="card flex justify-content-center">
            <Image  alt="Image" width="250" />
        </div>
                <Card title="Class"   className=" MyCardClass">
                <p className="mx-auto ">
                    {this.props.data}
                </p>
                
                <div class="row">
                    <div class="col-sm-5">
                    <Button variant="primary">Practice</Button>
                </div>
                </div>
                <br/>
                <Divider/>
            </Card>
            </> 
            }
            </>
        )
    }
}
export default MyCard;