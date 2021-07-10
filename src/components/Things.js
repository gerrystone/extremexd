import React from 'react'
import icon from '../Location.png'
import things from '../things.png'

const Things = () => {
    return (
        <div className="container-fluid things">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-1 thingsfoot d-flex align-items-center">
                        <div className="footprint">

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="things-message">
                            <h5>THINGS TO DO</h5>
                            
                                <h2>Events</h2>
                                <h2> Walking</h2>
                                <h2>Cycling</h2>
                                <h2>Stargazing</h2>
                                <h3> <img src={icon} className ="icon" /> Activities for Children</h3>
                                <button className="btn btn-things">
                                FIND THINGS TO DO
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <div className="container-fluid">
                                
                            </div>
                       <div className="things-image d-flex align-items-end">
                       <div className="footprint3">
                                    
                            </div>
                            <button className="btn btn-things-image">
                                VIEW ACTIVITY
                            </button>
                            
                       </div>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Things
