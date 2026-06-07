import React from 'react'
import Ashu from './components/Ashu'


const App = () => {

const jobOpenings= [
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAWkk7zL_65dD_YBgTMdBVyhSGAEBnq2mBxpNYTBubw&s=10",
    "date_posted": "5 days ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay_per_hour": 35,
    "location": "Mumbai, India"
  },
  {
    "logo": "https://animationvisarts.com/wp-content/uploads/2020/12/Amazon-current-Logo-2.jpg",
    "company": "Amazon",
    "date_posted": "2 weeks ago",
    "post": "Warehouse Associate",
    "tag1": "Part Time",
    "tag2": "Entry Level",
    "pay_per_hour": 18,
    "location": "Delhi, India"
  },
  {
    "logo": "https://i.pinimg.com/736x/cd/77/e0/cd77e04d9fe1a4ac66a26693d05e02c4.jpg",
    "company": "Microsoft",
    "date_posted": "10 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay_per_hour": 50,
    "location": "Bangalore, India"
  },
  {
    "logo": "https://cdn.mos.cms.futurecdn.net/8KZy7uk5XTxvoD3jcGj2AX-1920-80.jpg",
    "company": "Netflix",
    "date_posted": "3 weeks ago",
    "post": "UI/UX Designer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay_per_hour": 60,
    "location": "Hyderabad, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUauUcpDQSDBmeiz1dmF_mmLnzRuYbuxNdrASNjL6Xw&s=10",
    "company": "Tesla",
    "date_posted": "1 week ago",
    "post": "Mechanical Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay_per_hour": 45,
    "location": "Pune, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJuEqZtXOkbUB_wch8KNdNiJ4KqzZ6w1oUtxeSPm2akOwdozRA8ytGFc&s=10",
    "company": "Adobe",
    "date_posted": "4 days ago",
    "post": "Graphic Designer",
    "tag1": "Part Time",
    "tag2": "Junior Level",
    "pay_per_hour": 25,
    "location": "Noida, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyByYSp6XNvymrdP7Kzae3lB6SJgZLxJf7ikx-PgTDQ&s=10",
    "company": "Uber",
    "date_posted": "6 days ago",
    "post": "Data Analyst",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay_per_hour": 40,
    "location": "Gurgaon, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0BL-i74O2UeKYmb9zpYaXyMOnmEcHvegRJwDRrYtBdnH8NAZzWNGfzs&s=10",
    "company": "Airbnb",
    "date_posted": "2 months ago",
    "post": "Customer Support Specialist",
    "tag1": "Part Time",
    "tag2": "Entry Level",
    "pay_per_hour": 20,
    "location": "Jaipur, India"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdOKfpGS3JenWisQzGSA9LAh4NKwD-StCCB9Xfl26OQ&s=10",
    "company": "Meta",
    "date_posted": "8 days ago",
    "post": "Backend Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay_per_hour": 55,
    "location": "Chennai, India"
  },
  {
    "logo": "https://img.icons8.com/fluent/1200/spotify.jpg",
    "company": "Spotify",
    "date_posted": "3 days ago",
    "post": "Mobile App Developer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay_per_hour": 48,
    "location": "Kolkata, India"
  }
];
// console.log(jobOpenings);

  return (
    <div className="parent">
   {jobOpenings.map(function(elem, idx){
    console.log(idx);
    
    return <div key ={idx}> 
      <Ashu company ={elem.company} tag1={elem.tag1} post={elem.post} date_posted={elem.date_posted}
    tag2={elem.tag2} pay_per_hour={elem.pay_per_hour} location={elem.location} logo ={elem.logo} />
    </div>
   })}
    </div>
  )
}

export default App
