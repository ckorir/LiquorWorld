import React, { useContext } from 'react'
import '../../css/ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import stardull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/Context'

export default function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>

        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt='' />
            </div>
        </div> 

        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={stardull_icon} alt='' />
                <p>(420)</p>
            </div>

            <div className='productdisplay-right-price'>
                <div className='productdisplay-right-price-old'>
                    ${product.old_price}
                </div>
                <div className='productdisplay-right-price-new'>
                    ${product.new_price}
                </div>
            </div>
            <div className='productdisplay-right-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper porttitor volutpat. Sed vestibulum convallis sapien vitae dapibus. Nam sodales sit amet ex eget maximus.
            </div>

            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} >Add to Cart</button>
                <p className='productdisplay-right-category'><span>Category: </span>Women, T-shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>

    </div>
  )
}
