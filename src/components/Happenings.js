import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import icon from '../Location.png'
const Happenings = () => {
    return (
        <div className="container-fluid happenings">
            <div className="container">
            <div className="row d-flex justify-content-center">
                    <div className="col-md-12"> <h2>What’s On in The Yorkshire Dales</h2></div>
                    <div className="col-md-12 d-flex justify-content-center">  <p>Stories and happenings from the Yorkshire Dales National Park</p></div>
                </div>
               
                
                <div className="d-flex justify-content-center">
                <div className="happening-items">
                            <div className="happening-items-title d-flex justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                                        <h1><FaCalendarAlt /></h1>
                                    </div>
                                    <div className="col-md-9">
                                        <h2>Exhibition: Aftermath: Living through the peace</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="happening-items-details">
                                <p>The Green Howards Museum, Richmond North Yorkshire DL10 4QN United Kingdom</p>
                                <table>
                                    <tr>
                                        <td className="title">STARTS:</td>
                                        <td>February 1st 2019, 10:00am</td>
                                    </tr>
                                    <tr>
                                        <td className="title">ENDS:</td>
                                        <td>May 27th 2019, 5:00pm</td>
                                    </tr>
                                </table>
                                <div className="row">
                                    <div className="col-md-12 mt-3 d-flex align-items-center">
                                        <h4>
                                            FIND OUT MORE
                                        </h4>
                                        <img src={icon} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    
                    <div className="happening-items">
                            <div className="happening-items-title d-flex justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                                        <h1><FaCalendarAlt /></h1>
                                    </div>
                                    <div className="col-md-9">
                                        <h2>Forgotten Landscapes, Hidden Secrets – Andrew Burns Colwill</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="happening-items-details">
                                <p>The Green Howards Museum, Richmond North Yorkshire DL10 4QN United Kingdom</p>
                                <table>
                                    <tr>
                                        <td className="title">STARTS:</td>
                                        <td>February 1st 2019, 10:00am</td>
                                    </tr>
                                    <tr>
                                        <td className="title">ENDS:</td>
                                        <td>May 27th 2019, 5:00pm</td>
                                    </tr>
                                </table>
                                <div className="row">
                                    <div className="col-md-12 mt-3 d-flex align-items-center">
                                        <h4>
                                            FIND OUT MORE
                                        </h4>
                                      
                                    </div>
                                </div>

                            </div>
                       
                    </div>
                    <div className="happening-items">
                            <div className="happening-items-title d-flex justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                                        <h1><FaCalendarAlt /></h1>
                                    </div>
                                    <div className="col-md-9">
                                        <h2>Weaving with Silk with Jan Beadle</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="happening-items-details">
                                <p>The Green Howards Museum, Richmond North Yorkshire DL10 4QN United Kingdom</p>
                                <table>
                                    <tr>
                                        <td className="title">STARTS:</td>
                                        <td>February 1st 2019, 10:00am</td>
                                    </tr>
                                    <tr>
                                        <td className="title">ENDS:</td>
                                        <td>May 27th 2019, 5:00pm</td>
                                    </tr>
                                </table>
                                <div className="row">
                                    <div className="col-md-12 mt-3 d-flex align-items-center">
                                        <h4>
                                            FIND OUT MORE
                                        </h4>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container-fluid d-flex justify-content-center mt-5">
                        <button className="happenings-btn">SEE ALL EVENTS</button>
                    </div>
                </div>
                </div>
    )
}

export default Happenings
