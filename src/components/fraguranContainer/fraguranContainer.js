import React from 'react'
import {Element} from "react-scroll"
import Fraguranimg1 from "../../Asserts/cardamon.jfif"
import Fraguranimg2 from "../../Asserts/Bay-Leaf.jpg"
import Fraguranimg3 from "../../Asserts/honey.jpg"
import "./fraguranContainer.css"
const FraguranContainer = () => {
    return (
        <Element className="fraguranContainer" name="fragrance spices">
        
      
      <div class="card-group">
  <div class="card">
    <img class="card-img-top image" src={Fraguranimg1} alt=""></img>
    <div class="card-body">
      <h2 class="card-title">CARDAMOM</h2>
      <p class="text-danger font-weight-bold">500 KG : Rs.1350</p>
      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top image" src={Fraguranimg2} alt=""></img>
    <div class="card-body">
      <h2 class="card-title">BAY-LEAF</h2>
      <p class="text-danger font-weight-bold"> 250 Gms: Rs: 130</p>
      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top image" src={Fraguranimg3} alt=""></img>
    <div class="card-body">
      <h2 class="card-title">HONEY</h2>
      <p class="text-danger font-weight-bold">half ltr:900</p>

    </div>
  </div>
</div>
</Element>
      
      
      
        )
}

export default FraguranContainer
