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
            </div>
        
                
            <div class="row">
                {/* <MyCard data="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"/> */
                    this.state.data.map((d)=>{
                        return (
                            <>
                            <MyCard data={d.text} price={d.price}/>
                            </>
                        )
                    })
                    }
            </div>
            
            </>
        }
        </>
        );
    }
}
export default Home;