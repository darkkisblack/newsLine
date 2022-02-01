import React/* , { useEffect, useState } */ from "react";
/* import axios from "axios"; */
import {Link} from 'react-router-dom';
import { Card} from "react-bootstrap";

import "../App.css";


export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.vashgorod.ru/v1/news/?city=1&group_id=1731&with_image=1&fields=id,url,header,litera,image,dt_publish"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Идет загрузка...</div>;
    } else {
      return (
        <div className="container">
          {items.map((item) => (
           
            <Card style={{ width: "500px" }} key={item.id}>
              <Card.Img
                variant='left'
                src={item.image}
                style={{ width: "150px", height: "110px", margin:"auto"   }}
              />
              <Card.Body>
                <Card.Title>{item.header}</Card.Title>
                <Card.Text>{item.litera}</Card.Text>
                <Card.Text>{item.dt_publish}</Card.Text>
                
                <Link to={ {pathname:"/news/" + item.id} } className="button-text" > Подробнее</Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      );
    }
  }
}

/* return (
    response.data.map(newLine => {
<div>


         <Card style={{ width: "18rem" }} key={newLine.id }>
      <Card.Img variant='top' src=""/>
      <Card.Body>
        <Card.Title>{newLine.header}</Card.Title>
        <Card.Text>{newLine.litera}</Card.Text>
        <Card.Text>{newLine.dt_publish}</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
    })

  );
} */

export default MainPage;
