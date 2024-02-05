//import { useState } from 'react'
import blockM from '../../assets/Block_M-Hex.png'
import './App.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//import Card from "../Card/Card.tsx";
import Search from "../Search/Search.tsx";

function App() {
  return (
      <div>
          <div className="banner-container">
              <h1 className="title flex-item-1">Wolverinemart</h1>
              <img src={blockM} alt="Block M" className="logo flex-item-2" width="100px"/>
              <input type="text" placeholder="Useless search bar to take up space" className="inputField flex-item-3"/>
              <div className="fa-gear">
                  <FontAwesomeIcon icon={faGear}/>
              </div>
              <div className="fa-user">
                  <FontAwesomeIcon icon={faUser}/>
              </div>
              <div className="fa-shoppingCart">
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
          </div>
          <Search/>
      </div>
  )
}

export default App
