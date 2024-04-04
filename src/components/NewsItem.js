import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render(){
  let {title,description,imageUrl,newUrl}=this.props; 
    return (
      <div>
    <div className="card" style={{width:"18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newUrl} target="_blank" className="btn btn-sm btn-primary">read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
