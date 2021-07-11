import React from 'react'
import icon from '../Location.png'
import easter from '../easter.png'

const Easter = () => {
    return (
        <div className="container-fluid easter">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-1 easterfoot d-flex align-items-center">
                        <div className="footprint">

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="easter-message">
                            <h5>WHAT’S ON EASTER 2019</h5>
                            
                                <h2>Easter Walk Route</h2>
                                <h3 className="withunderline"> <img src={icon} className ="icon" />Lambing at Gill Garth Farm</h3>
                                <h2>Wild About Dormice</h2>
                                <h2> Easter Coffee Mornings</h2>
                                <h2> The White Rabbit Trail</h2>
                                <button className="btn btn-easter">
                                VIEW EASTER ACTIVITIES
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5">
                       <div className="easter-image">
                           <div className="easter-image-button-holder">
                           <button className="btn btn-easter-image">
                                VIEW ACTIVITY
                            </button>
                            
                           </div>
                           
                       </div>
                       <div className="container-fluid">
                                <div className="footprint1">
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Easter
