import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';
class DisplayProduct extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', products: ''};
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/products')
       .then(response => {
         this.setState({ products: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.products instanceof Array){
         return this.state.products.map(function(object, i){
             return (
               <tr>
                    <td>{ object.id }</td>
                    <td>{ object.title }</td>
                    <td>{ object.body }</td>
                    <td width="200px">
                      <Link to={"edit/"+object.id} className="btn btn-primary">Edit</Link>
                      <input type="submit" value="Delete" className="btn btn-danger"/>
                   </td>
               </tr>
             );
         })
       }
     }


  render(){
    return (
      <div>
        <div className="row">
          <div className="col-md-12"><h1>Products</h1></div>
        </div><br />
        <table className="table table-bordered table-striped">
            <thead>
            <tr>
                <td>ID</td>
                <td>Product Title</td>
                <td>Product Body</td>
                <td width="200px">Actions</td>
            </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayProduct;
