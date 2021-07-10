import React from 'react'
import leftarrow from '../leftarrow.png'
import rightarrow from '../rightarrow.png'

const Places = () => {
    return (
        <div className="container-fluid places">
            <div className="container d-flex justify-content-center">
                <h2>Places To Go</h2>
            </div>
            <div className="container placeimages">
                <div className="row">
                    <div className="col-md-1 d-flex places-arrows justify-content-center ">
                        <div className="arrow-placeholder ">
                            <img src={leftarrow} className="arrowicon" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="towns">

                                </div>
                                <div className="place-title">
                                    <h4 className="active">
                                        Towns and Villages
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="nature"></div>
                                <div className="place-title">
                                    <h4>
                                        Wildlife & Nature
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="food"></div>
                                <div className="place-title">
                                    <h4>
                                        Food & Drink
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="history"></div>
                                <div className="place-title">
                                    <h4>
                                        History Arts & Culture
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <button className="places-btn">
                                    SEE ALL PLACES
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex places-arrows justify-content-center ">
                        <div className="arrow-placeholder">
                            <img src={rightarrow} className="arrowicon" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Places
