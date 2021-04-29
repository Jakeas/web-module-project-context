import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const Item = (props) => {
	const { cart, setCart } = useContext(CartContext)

	const clickHandler = (id) => {
		const removeItem = cart.filter((item) => item.id !== id)
		setCart(removeItem)
	}
	console.log({cart})
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={()=> clickHandler(props.id)}>Remove from cart</button>
				{/* <button onClick={clickHandler}>Remove from cart</button> */}
			</div>
		</div>
	);
};

export default Item;
