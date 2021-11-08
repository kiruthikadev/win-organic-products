import React from 'react'
import {Element} from "react-scroll"
import productimg1 from "../../Asserts/blackpepper.jpg"
import productimg2 from "../../Asserts/c1.crdownload"
import productimg3 from "../../Asserts/cinamon.jpg"


const ProductsContainer = () => {
    return (
       
        <Element className="ProductsContainer"  name="spices">
      
      <div class="card-group">
  <div class="card">
    <img class="card-img-top" src={productimg1} alt=""></img>
    <div class="card-body">
      <h2 class="card-title">PEPPER</h2>
      <p class="text-danger font-weight-bold">1 KG : Rs. 500</p>
      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={productimg2} alt=""></img>
    <div class="card-body">
      <h2 class="card-title">CLOVE</h2>
      <p class="text-danger font-weight-bold">1 KG :RS. 850 </p>
      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={productimg3} alt=""></img>
    <div class="card-body">
      <h2 class="card-title">CINAMON</h2>
      <p class="text-danger font-weight-bold">500 KG: Rs.499</p>

    </div>
  </div>
</div>
</Element>
      
      
      
        )
}

export default ProductsContainer
