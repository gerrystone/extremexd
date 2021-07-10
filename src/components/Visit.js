import React from 'react'
import navigation  from '../Direction Icon.svg'
import dog from '../Dog Icon.svg'
import parking from '../Parking Icon.svg'
import wheelchair from '../Wheelchair Icon.svg'

const Visit = () => {
    return (
        <div className="visit container-fluid">
            <div className="container ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12"><h2>Plan Your Visit</h2></div>
                    <div className="col-md-12 d-flex justify-content-center">  <p>Get advice on bringing your dog, where to pick up wifi and information on the all important toilets and car parks.</p></div>
                </div>
                
              
                <div className="d-flex justify-content-center">
                    <div className="item-1 visit-item d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-md-12"><img src={navigation} /></div>
                            <div className="col-md-12"><h4>How to get here</h4></div>
                        </div>                 
                        
                    </div>
                    <div className="visit-item item2 d-flex justify-content-center align-items-center">
                    <div className="row">
                            <div className="col-md-12"><img src={parking} /></div>
                            <div className="col-md-12"><h4>Parking & Amenities</h4></div>
                        </div>       
                    </div>
                    <div className="visit-item item3 d-flex justify-content-center align-items-center">
                    <div className="row">
                            <div className="col-md-12"><img src={wheelchair} /></div>
                            <div className="col-md-12"><h4>Accessibility</h4></div>
                        </div>       
                    </div>
                    <div className="visit-item item4 d-flex justify-content-center align-items-center">
                    <div className="row">
                            <div className="col-md-12"><img src={dog} /></div>
                            <div className="col-md-12"><h4>Dogs</h4></div>
                        </div>       
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-center mt-5">
                    <button className="visit-btn">PLAN YOUR VISIT</button>
                </div>
            </div>
        </div>
    )
}

export default Visit
