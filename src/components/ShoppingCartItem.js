import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'

const Item = (props) => {

	const { cart } = useContext(CartContext)
		
	const handleClickRemove = () =>{
		//what goes in here?
	}

	const removeItem = (remove) => {
		// let cartCopy = [...cart]
		 cart.filter((cartItem) => cartItem.id !== remove)
		// return setCart(cartCopy)
	}
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


	

			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={handleClickRemove}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
