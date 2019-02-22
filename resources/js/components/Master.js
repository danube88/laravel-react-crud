import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class Master extends Component {
  render(){
    return (
      <div className="container">
        <br/>
        <nav className="card">
          <div className="container-fluid">
            <div className="card-header">
              Product list
            </div>
            <div className="card-body">
              <div className="navbar navbar-expand-md navbar-light navbar-laravel">
                <ul className="navbar-nav">
                  <li key={1} className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                  <li key={2} className="nav-item"><Link to="add-item" className="nav-link">Create Product</Link></li>
                  <li key={3} className="nav-item"><Link to="display-item" className="nav-link">Products</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
};
export default Master;
