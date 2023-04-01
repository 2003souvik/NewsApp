import React, { Component } from 'react'
import NewsIiems from './NewsIiems'
import '../App.css'
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps=
  {
    category:'general',
    pageSize:8

  }
  static propTypes={
    category:PropTypes.string,
    pageSize:PropTypes.number
  }
    constructor()
    {
        super();
       
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    async componentDidMount()
    {
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=a3f40470950e4bf58df0df9da5101848&page=1&pageSize=20`
        let data = await fetch(url);
        let pd= await data.json();
    
        this.setState({articles:pd.articles, totalResults:pd.totalResults})

    }
    next=async()=>
    {
      if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=a3f40470950e4bf58df0df9da5101848&page=${this.state.page+1}&pageSize=20`
        let data = await fetch(url);
        let pd= await data.json();
    
        
      this.setState({
        page:this.state.page+1,
        articles:pd.articles
      })}

    }
    prev=async()=>
    {
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=a3f40470950e4bf58df0df9da5101848&page=${this.state.page-1}&pageSize=20`
      let data = await fetch(url);
      let pd= await data.json();
   
      
    this.setState({
      page:this.state.page-1,
      articles:pd.articles
    })
  }
    
  render() {
    return (
      <div className='Componenets my-3 '>
      <h2 > Top Headlines </h2>
      
        <div className="row">
        {this.state.articles.map((elements)=>{
            return <div  className="col-md-3" key={elements.url}>
            <NewsIiems title={elements.title} description={elements.description} imageurl={elements.urlToImage} url={elements.url}/>
            </div>
        })}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark ms-2" onClick={this.prev}>Previous</button>
        <button  type="button" className="btn btn-dark r" onClick={this.next}>Next</button>
        </div>
       
       
       
        
        </div>
       
      </div>
    )
  }
}

export default News
