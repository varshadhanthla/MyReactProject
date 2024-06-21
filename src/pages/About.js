import React from 'react'
import MutliplePizzas from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop' 
        style={{ backgroundImage: `url(${MutliplePizzas})` }}>
        </div>
        <div className='aboutBottom'>
            <h1> ABOUT US </h1>
            <p>
            John's Pizzeria, founded by John Fetherington in 1947, has been a beloved cornerstone in the Brookside community, offering authentic, handcrafted pizzas made with the finest ingredients. Our commitment to quality shines through in every slice, from our house-made dough to our fresh sauces and premium toppings. Beyond our classic Margherita and Pepperoni pizzas, we feature unique creations like the "John’s Special" and "Mediterranean Delight," catering to a variety of tastes with vegetarian, vegan, and gluten-free options. Whether you’re dining in our welcoming restaurant, grabbing a takeaway, or enjoying our prompt delivery service, we strive to provide a delicious experience that embodies our passion for great food and community spirit. We are proud to be more than just a pizzeria; we are a gathering place for friends and families, a supporter of local schools and charities, and a vital part of the community we serve.
            </p>
        </div>
    </div>
  )
}

export default About
