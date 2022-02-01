import React from "react";
import {Link} from 'react-router-dom';
import "../App.css";

const newsDetail = (props) => {
    let linkButton = null
    if (props.showLink)
    {
        linkButton = <Link to={{ pathname: '/news/' + props.id }}className="button-text" >Посмотреть</Link>;
       }
       
       return <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
           
               
                 <hr />
                 <div className="card-list">
                 <b>header: </b> {props.header}<br/>
                 <b>Body:</b> {props.body}<br/>
                 <b>dt_publish:</b> {props.dt_publish}<br/>
                 
                 </div>
                 <hr />
                 
                 <div className="button">{linkButton} </div>
                
              
     
        </div>
             
     
}

export default newsDetail