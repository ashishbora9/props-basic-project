import React from 'react'
import {Bookmark} from 'lucide-react'

const Ashu = (props) => {
  // console.log(props.company);
  
  return (
     <div className="card">
        <div className="top">
          <img src= {props.logo}alt="" />
          <button>Saved <Bookmark /></button>
        </div>
        <div>
        <div className="centre">
          
          <h3>{props.company} <span>{props.date_posted}</span></h3>      
          <h2>{props.post}</h2>
          <div className='tag'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
          </div>
        </div></div>
        <div className="bottom">
          <div>
          <h3>${props.pay_per_hour}</h3>
          <p>{props.location}</p>
          </div>
          <div>
            <button>Apply now</button>
          
          </div>
        </div>
      </div>
  )
}

export default Ashu
