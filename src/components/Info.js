import React from 'react'

const Info = () => {
    return (
        <div className="container-fluid mb-5">
            <div className="info">
                <p>
                An outstanding place to explore for many years, The Yorkshire Dales are famous for wonderful scenery.
                </p>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="map">
                            <h5>FIND YOUR WAY</h5>
                            <h2>Yorkshire Dales Map</h2>
                            <button className="btn btn-map">
                                VIEW MAP
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="inspire">
                        <h5>GET OUT THERE</h5>
                            <h2>Be Inspired</h2>
                            <button className="btn btn-inspire">
                                VIEW MAP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
