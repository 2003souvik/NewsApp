import React, { Component } from 'react'
import '../App.css'
export class NewsIiems extends Component {
  render(props) {
    let {title,description,imageurl,url}=this.props
    return (
      <div className='my-3 cm'>
      <div className="card" style={{width:"18rem"}}>
    <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description} </p>
    <a href={url} target="_blank" className="btn btn-sm btn-dark">ReadMore</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsIiems
