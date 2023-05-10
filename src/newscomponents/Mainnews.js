import React, { Component } from 'react'

export default class Mainnews extends Component {
  render() {
    return (
        <div className="card">
        <div className="card-body">
          <img className='card-img-top card' src={this.props.imgsrc}></img>
          <h1 className="card-tittle h4">{this.props.title}</h1>
          <p className="card-text">{this.props.desc}</p>
          <a href={this.props.url} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    )
  }
}
