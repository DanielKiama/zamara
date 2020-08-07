import React from 'react';
import Zamara_app from "../images/newsimg.jpg"
import Zamara_app2 from "../images/speaker.jpg"
class News extends React.Component {
    state = {  }
    render() { 
        return ( 
<div className="news_wrap">
    <div className="container">
       <h1 className="text-center">Our Latest Desk</h1>
       <div className="row">
           <div className="col-12 col-sm-12 col-md-6">
             <div className="news_content">
             <h2>Zamara Blog</h2>
              <div className="news_banner">
              <img src={Zamara_app}/>
              </div>
              <h3  className="news_sub">TELECOMMUTING</h3>
              <h2 className="news_heading">Migrating to<br/>
                Microsoft Teams</h2>
              <h5 className="news_date">MONDAY, JUNE 9, 2020 08:00</h5>
              <p>
              Zamara is working at speed to deploy and adopt a new way of
collaborating in the New. Microsoft Teams is a chat-centered
collaboration platform that brings together collections of
people, content and tools to get things done...
              </p>
              <div className="news_item_footer row">
                 <div className="col-12 col-sm-12 col-md-6">
                 <button>EXPLORE MORE</button>
                 </div>
                 <div className="col-12 col-sm-12 col-md-6">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                 </div>
                 
              </div>
             </div>
           </div>
           <div className="col-12 col-sm-12 col-md-6">
           <div className="news_content">
           <h2>Latest News</h2>
           <div className="row">
               <div className="col-12 col-sm-12 col-md-4">
                 <div className="latest">
                 <img src={Zamara_app2}/>
                 </div>
               </div>
               <div className="col-12 col-sm-12 col-md-8">
               <h3  className="news_sub mt-0">INVESTOR CALENDAR</h3>
              <h2 className="news_heading">Announcement
of full year
results 2019</h2>
              <h5 className="news_date">MONDAY, JUNE 9, 2020 08:00</h5>
              <p>
              With the coronavirus forcing millions
into lockdown mode...
              </p>
              <div className="news_footer">
              <button>EXPLORE MORE</button>
              </div>
               </div>
           </div>
           </div>
              
           </div>
       </div>
    </div>
</div>

         );
    }
}
 
export default News;