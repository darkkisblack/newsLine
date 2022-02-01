import React from "react";
/* import { Card} from "react-bootstrap"; */
import "../App.css";
import NewsDetail from "./newsDetail";

class Post extends React.Component {
    state = {
        news:{}
    }
      
    componentsDidMount() {
        this.getNewsData()
    }
    getNewsData() {
fetch(`https://api.vashgorod.ru/v1/news/${this.props.match.params.id}`)
        
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              /* isLoaded: true, */
              news: result,
            });
          },
          /* (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          } */
        );
    }
        
    

    render() {
        let newsDetail = null;
        if(this.state.news.id){
            newsDetail =(
            <NewsDetail
                    key={this.state.news.id}
                    
                    header={this.state.news.headere}
                    body={this.state.news.body}
                    dt_publish={this.state.news.dt_publish}
                   
                    showLink={false}>


            </NewsDetail>)
        }
        else{
            newsDetail =<p>Loding...</p>
        }



        return(

            <React.Fragment>
            <h1 className="header">{this.state.news.header}</h1>
            <div className="cardElement">{newsDetail} </div>
      
            </React.Fragment>

        )
    }

}






    


export default Post