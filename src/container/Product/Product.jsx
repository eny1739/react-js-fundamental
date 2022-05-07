/* eslint-disable require-jsdoc */
import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
  state = {
    order: 4,
  };

  // handlePlus = () =>{
  //   this.setState({
  //     order: this.state.order + 1,
  //   });
  // };
  //
  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState({
  //       order: this.state.order - 1,
  //     });
  //   }
  // };

  handleCounterChange = (newVal)=>{
    this.setState({
      order: newVal,
    });
  };


  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="http://etanee.co.id/wp-content/uploads/2018/09/logo-96px.png"/>
          </div>
          <div className="troley">
            <img src="https://etanee.id/static/media/basket-blue.937a12ce.svg"/>
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value)=>{
          this.handleCounterChange(value);
        }}/>
      </Fragment>
    );
  }
}

export default Product;
