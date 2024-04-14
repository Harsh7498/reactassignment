import React from 'react';
import PropTypes from 'prop-types';
//import { LoginWrapper } from './Login.styled';
import {InputText} from 'primereact';
import Form from "react-bootstrap/Form";
import "./Home.css";
import Button from "react-bootstrap/Button";
import MyNavbar from '../Navbar/Navbar';
import MyCard from '../Card/MyCard';

class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:[
                {
                    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
                    price:"200"
                },
                {
                    text:"Piyush ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
                    price:"400"
                },
                {
                    text:"Harsh ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
                    price:"600"
                }
            ]
        }
    }
    render()
    {
        return(
        <>
        {
            <>
            <div class="row ">
            <MyNavbar/>
            <span><p class="pClass">Welcome to Course Portal</p></span>
            </div>
            
            </>
        }
        </>
        );
    }
}
export default Home;