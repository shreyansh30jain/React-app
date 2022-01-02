import React from "react"
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import Card from "./component/card"
import I3 from "./component/images/c8986f46-0521-4a14-a4e3-4bf2622a3aa5.jpg"
import I4 from "./component/images/a3fa3-16217689530123-800.jpg"
import I5 from "./component/images/j4g9dobsmuhjdakf2tta.jpg"
import I6 from "./component/images/image16x9.img.1024.medium.jpg"
export default function App(){
  return(
   <div>
      <Navbar/>
      <Hero/>
      <div className="main--body">
      <Card
      img={I3}
      rating = "5.0"
      review-count={6}
      country= "USA"
      title="Life Lessons from life of Katie Zeferes."
      price={136}
      />
      <Card
      img={I4}
      rating = "4.0"
      review-count={7}
      country= "India"
      title="Life of Sania Nehwal."
      price={120}
      />
       <Card className="card--3"
      img={I5}
      rating = "4.5"
      review-count={5}
      country= "Japan"
      title="Life of IKEE Rikako."
      price={130}
      />
      <div className="card--4">
       <Card
      img={I6}
      rating = "4.9"
      review-count={6}
      country= "UK"
      title="Life of Lewis Hamilton."
      price={150}
      />
     </div>
    </div>
   </div>
  )
}