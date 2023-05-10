import React, { Component } from "react";
import Mainnews from "./Mainnews";


export default class newsitem extends Component {
    articles=[
        {
            "tittle":"pratik",
            "description":"Breaking news",
            "urlToImage":"https://storage.googleapis.com/afs-prod/media/a16184628c754e938c29ec0c86d44edb/3000.jpeg"

        },
        {
          "tittle":"Sarthak",
          "description":"nmnmn",
          "urlToImage":"https://storage.googleapis.com/afs-prod/media/a16184628c754e938c29ec0c86d44edb/3000.jpeg"
        }
    ]
    constructor()
    {
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
        }
    }
    async componentDidMount()
    {
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0ac35736c570484886036d837d2a0b46&page=1&pagesize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parsedata=await data.json();
      console.log(parsedata);
      this.setState({
        articles:parsedata.articles,
        totalresults:parsedata.totalResults,
      })
    }
    handenextclick=async ()=>{
      console.log("next");
      console.log(this.state.page);
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0ac35736c570484886036d837d2a0b46&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parsedata=await data.json();
      this.setState
      ({
        page:this.state.page+1,
        articles:parsedata.articles
      }
      )
    

    }
    handleprevclick=async()=>
    {
      console.log("prev");
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0ac35736c570484886036d837d2a0b46&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parsedata=await data.json();
      this.setState
      ({
        page:this.state.page-1,
        articles:parsedata.articles
      }
      )
    }
  render() {
    return (
      <div className="container-fluid">
           <div className="row" style={{ padding: "160px 30px 20px 250px" }}>
        {this.state.articles.length>0?this.state.articles.filter(article => article.content!=null).map((ele)=>{
            return <div key={ele.url} className="col-md-4">
             <Mainnews desc={ele.description?ele.description.slice(0,100)+'...':ele.content?ele.content.slice(0,100)+'...':""} title={ele.title?ele.title:" "} imgsrc={ele.urlToImage} url={ele.url} />
         </div>
        }):<h1>Articles Not availabel</h1>}
       <div className="container d-flex justify-content-between" style={{margin: "10px"}}>
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprevclick}>Previous</button>
        <button className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalresults/this.props.pageSize)} onClick={this.handenextclick}>Next</button>
      </div>
        
      </div>
      </div>
      
    );
  }
}
