import React from 'react';
import PropTypes from 'prop-types';
//import { LoginWrapper } from './Login.styled';
import {InputText} from 'primereact';
import Form from "react-bootstrap/Form";
import "./Classes.css";
import Button from "react-bootstrap/Button";
import MyNavbar from '../Navbar/Navbar';
import MyCard from '../Card/MyCard';

class Classes extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:[
                {
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    
                },
                {
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    
                },
                {
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    
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
                            <MyCard data={d.text} isClass="true"/>
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
export default Classes;