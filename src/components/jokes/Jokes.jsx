import React from 'react'
import "./Jokes.css"
import Smiley from "../../assets/smiley.png"
const Jokes = () => {
  return (
    <section className='jokes-sec'>
    <div className='container joke'>
    <h2>Jokes</h2>
    <img src={Smiley} alt="smiley" />
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus fugit at odit voluptatum optio hic enim perferendis quaerat neque.</p>
    <button>Generate NEW JOKES</button>
    </div>
      
    </section>
  )   
}

export default Jokes
