import React from 'react';
// E:\react-web\onlinefashion\src\assets\css\slides.css
class ShoppingItem extends React.Component {
  render() {
    const {
      names,
      listedPrice,
      listedDate,
      hasDiscount,
      imgLink = 'https://rukminim1.flixcart.com/image/832/832/watch/5/h/y/curren-8152-curren-original-imaecw9g7hqp85nw.jpeg?q=70'
    } = this.props;

    return (
      <div>
        <div className='shopping-item-wrapper'>
          {hasDiscount && <div>Discount on this item</div>}
          <div className='shopping-item-img'>
            <img src={imgLink} alt='Img' width='100px' height='100px' />
          </div>
          <div className='shopping-item-desc'>
            <div>Name:{names}</div>
            <div>Price:{listedPrice}</div>
            <div>Listed Date: {listedDate}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingItem;
