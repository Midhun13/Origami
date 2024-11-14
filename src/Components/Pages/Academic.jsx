import React from 'react'
import '../Css/Academic.css'
import Std from '../Images/Std.png'
import Acad1 from '../Images/Acad1.png'
import Acad2 from '../Images/Acad2.png'
import Acad3 from '../Images/Acad3.png'
const Academic = () => {
  return (
    <>
    <section className='sect1'>
<div className="container-fluid">
  <div className="row align-items-center" >
    <div className="col-md-6">
      <img src={Std} alt="" width={400} className='Pic' />
    </div>
    <div className="col-md-6 center " id='QuoteDiv'>
      <h4 id="Quote" >"Education is the most powerful weapon which you can use to change the world."</h4>
      <h4 id='Author'><b>-Nelson Mandela</b></h4>
    </div>
  </div>
</div>


</section>

<section>
<h3 id='text'>🆕 Updates </h3>
<div className='Blank'></div>
<hr />
</section>

<section className='Sub'>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
      <div class="card" style={{width:350}}>
  <div class="card-body" id='Cards1'>
    <h5 class="card-title">Addmission Starts</h5>
    <p class="card-text">Origami English Training Admission Open! Enroll Now for a Creative Journey</p>
    <a href="#" class="btn btn-primary">Explore More</a>
 
  </div>
</div>
      </div>
      <div className="col-md-4">
      <div class="card" style={{width:350}}>
  <div class="card-body" id='Cards1'>
    <h5 class="card-title">New Online Test Options</h5>
    <p class="card-text">The International English Language Testing System Introudce New Exam...</p>
    <a href="#" class="btn btn-primary">Explore More</a>
 
  </div>
</div>
      </div>
      <div className="col-md-4">
      <img src={Acad1} alt="" width={200} id='updateimages'/>
      </div>
    </div>
  </div>
</section>
<hr />

<section className='Sub'>
  <div className="container-fluid " >
    <div className="row">
      <div className="col-md-4">
      <div class="card" style={{width:350}}>
  <div class="card-body" id='Cards1'>
    <h5 class="card-title"> OET Adds More Healthcare Specializations</h5>
    <p class="card-text">To better serve a broader range of healthcare professionals including dentistry,radiography ...</p>
    <a href="#" class="btn btn-primary">Explore More</a>
 
  </div>
</div>
      </div>
      <div className="col-md-4">
      <div class="card" style={{width:350}}>
  <div class="card-body" id='Cards1'>
    <h5 class="card-title">Score Reporting Made Faster for IELTS and OET</h5>
    <p class="card-text">Both IELTS and OET have streamlined their score-reporting processes reducing the time..</p>
    <a href="#" class="btn btn-primary">Explore More</a>
 
  </div>
</div>
</div>
<div className="col-md-4">
      <img src={Acad2} alt="" width={200} id='updateimages'/>
      </div>
</div>
</div>
</section>
<hr />

<section className='Sub'>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
      <div class="card" style={{width:350}}>
  <div class="card-body"id='Cards1'>
    <h5 class="card-title">OET Now Accepted for Healthcare Professionals in More Countries</h5>
    <p class="card-text">The Occupational English Test (OET) continues to grow in acceptance, with several countries recently...</p>
    <a href="#" class="btn btn-primary">Explore More</a>
 
  </div>
</div>
      </div>
      <div className="col-md-4" >
      <div class="card" style={{width:350}} >
  <div class="card-body" id='Cards1'>
    <h5 class="card-title"> Increased Testing Dates and Centers for IELTS and OET</h5>
    <p class="card-text">Due to the high demand, both IELTS and OET have increased their test dates and opened new centers worldwide...</p>
    <a href="#" class="btn btn-primary">Explore More</a>
 
  </div>
</div>
</div>
<div className="col-md-4">
      <img src={Acad3} alt="" width={200} id='updateimages' />
      </div>
</div>
</div>
</section>


      <section id="research-publications">
         <div className="container">
            <h2>Research and Publications</h2>
            <p>At Origami English Training Institute, we’re dedicated to providing quality English training and supporting research on effective language learning methods, particularly in IELTS and OET preparation.</p>

            <div className="publications">
               <div className="publication-item">
                  <h3>IELTS Success Strategies</h3>
                  <p>Explore our recent study on strategies for scoring high in IELTS, including insights into the Speaking and Writing sections.</p>
                  <button className='btn'>Read More</button>
               </div>

               <div className="publication-item">
                  <h3>Effective OET Preparation Techniques</h3>
                  <p>Our research publication on optimal preparation techniques for OET to help healthcare professionals achieve their  goals.</p>
                  <button className='btn'>Read More</button>
                
               </div>

               <div className="publication-item">
                  <h3>Innovative Spoken English Practices</h3>
                  <p>Discover our valuable insights on spoken English fluency and practical exercises proven to improve communication skills</p>
                  <button className='btn'>Read More</button>
               </div>

            </div>
         </div>
      </section>






    </>
  )
}

export default Academic
