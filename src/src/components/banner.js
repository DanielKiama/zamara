import React from 'react';

class Banner extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="banner">
                   <div className="container">
                        <div className="banner_content">
                        <h1>We are a leading
                    PanAfrican Financial
                    Solutions Provider</h1>
                    <p>
                    We help businesses and individuals align their
                    financial goals with innovations and strategies,
                    to efficiently create measurable and scalable
                    financial wellness.
                    </p>
                    <button>Know us more</button>
                        </div>
                   </div>
            </div>
         );
    }
}
 
export default Banner;