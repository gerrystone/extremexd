import React from 'react'
import extreme from '../extreme.png'
import europac from '../europac.png'
import ranger from '../ranger.png'
import investors from '../investors.png'
import np from '../np.png'
const Footer = () => {
    return (
        <div className="container-fluid p-0">
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Yorkshire Dales National Park</h5>
                            <h4>
                                Yoredale,
                            </h4>
                            <h4>
                                Bainbridge,
                            </h4>
                            <h4>
                                Leyburn,
                            </h4>
                            <h4>
                                North Yorkshire, DL8 3EL
                            </h4>

                            <h5 className="mt-4">Terms & Conditions</h5>
                        </div>
                        <div className="col-md-3">
                            <h4>
                                0300 456 0030
                            </h4>
                            <h4 className="mt-2">info@yorkshiredales.org.uk</h4>
                            <h4 className="mt-4">Media Library</h4>
                            <h4>Filming in the Park</h4>
                            <h4 className="mt-5">Privacy Policy</h4>
                        </div>
                        <div className="col-md-3">
                            <div className="row d-flex align-content-around">
                                <div className="col-md-12 d-flex align-items-center justify-content-center"> <img src={europac} className="europac" /></div>
                                <div className="col-md-12 mt-3 d-flex align-items-center justify-content-center"> <img src={np} className="np" /></div>
                            </div>


                        </div>
                        <div className="col-md-3">
                            <div className="row d-flex">
                                <div className="col-md-12 d-flex align-items-center justify-content-center"> <img src={ranger} className="ranger" /></div>
                                <div className="col-md-12 mt-5 d-flex align-items-center justify-content-center"><img src={investors} className="investor" /></div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid copyright">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-3">
                        <div className="footer-logo">
                        <img src={extreme} />
                    </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-copy">
                            <h5>© Yorkshire Dales National Parks 2019</h5>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer
