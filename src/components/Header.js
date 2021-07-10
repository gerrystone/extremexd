import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const Header = () => {
    return (
        <div className=" container-fluid p-0 m-0">
            <div className="header">
                <div className="header-title">
                <h2>
               Welcome to the Yorkshire Dales Park
               </h2>
                </div>
               <div className="header-bottom">
                  <div className="header-bottom-title">
                    <h4>
                        <FaArrowDown />
                    </h4>
                  </div>
                  <div className="header-bottom-info">
                  <p>
                  ‘Flowers and plants in Feizor, Oxenber ’ Photo by Paul Harris
                  </p>
                  </div>
                  
               </div>
            </div>
        </div>
    )
}

export default Header
