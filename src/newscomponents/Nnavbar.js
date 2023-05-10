import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nnavbar extends Component {
  render() {
    return (
      <>
      <div className='main1'>
        <div className='tittle'>
            News Monkey
        </div>
        <div className='menu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cricket">Cricket</Link></li>
                <li ><Link to="/techno">Technology</Link></li>
                <li ><Link to="/science">Science</Link></li>
                <li ><Link to="/inter">International</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
            </ul>
        </div>
      </div>
      </>
    )
  }
}
