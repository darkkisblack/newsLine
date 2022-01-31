import React, {useEffect, useState} from "react";
import axios from "axios"

import {Card, Button} from "react-bootstrap"



export class Main extends React.Component {

    render() {
        const [header, litera, image, dt_publisher, setNews] = useState()
        const scrollHandler = (e) => {
            console.log(e)
        }
        useEffect(() => {
            axios.get("https://api.vashgorod.ru/v1/news/?city=1&group_id=1731&with_image=1&fields=id,url,header,litera,image,dt_publish")
            .then(resoponse => setNews(resoponse.data))
        })
        useEffect(()=> {
            document.addEventListener("scroll", scrollHandler)
            return function() {
                document.removeEventListener("scroll", scrollHandler)
            }
        }) 
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{header}</Card.Title>
              <Card.Text>
                {litera}
              </Card.Text>
              <Card.Text>
                {dt_publisher}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>  
        )
    }
}

export default(Main)
