import React from 'react';

class Services extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="services">
            <div className="servies_top text-center">
                <div className="container">
                <h1>Our World of Services</h1>
                <p>Committed to <span><em>Powering Prosperity</em></span> through innovative financial solutions<br/>
focused on value addition and lives transformation.</p>
               
                </div>
            </div>
            <div className="container">
            <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 service_item">
                            <span className="icon1"></span>
                            <h2>
                            ACTUARIES
                            </h2>
                            <p>From your first pay cheque
                            to your last, our seasoned
                            financial planning actuaries and
                            analysts help you make sense
                            of your financial journey to
                            provide you with peace of mind,
                            now and for a lifetime.</p>
                            <button>Learn more</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 service_item">
                            <span className="icon2"></span>
                            <h2>
                            ADMINISTRATION
                            </h2>
                            <p>We offer pension solutions
                                that help you experience
                                a seamless transition from the
                                world of work into retirement
                                with a viable defined benefit plan,
                                defined contribution plan
                                and hybrid schemes.</p>
                            <button>Learn more</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 service_item">
                            <span className="icon3"></span>
                            <h2>
                            INSURANCE
                            </h2>
                            <p>We provide a comprehensive
                            array of insurance solutions to
                            both corporate and individual
                            clients for their assets, liability
                            and business risks.</p>
                            <button>Learn more</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 service_item">
                            <span className="icon4"></span>
                            <h2>
                            CONSULTANCY
                            </h2>
                            <p>We advise businesses,
                            individuals on finance, risk and
                            investments with indepth
                            experience in modeling
                            techniques, valuation
                            and strategy.</p>
                            <button>Learn more</button>
                        </div>
                </div>
            </div>
           
        </div>
         );
    }
}
 
export default Services;