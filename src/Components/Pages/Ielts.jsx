import React from 'react'
import '../Css/IELTS.css'
import Pic from '../Images/Pic.png'

const Ielts = () => {
  return (
    <>
  <section id='sect1'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" id='QnDiv'>
          <h2 id='Qn'><b>What is IELTS ?</b></h2>
    <p id='QnPara'><b>The International English Language Testing System (IELTS) </b>is a globally recognized assessment of English language proficiency for non-native speakers. It plays a crucial role for individuals seeking education, work, or immigration opportunities in English-speaking countries. The test evaluates four key language skills: Listening, Reading, Writing, and Speaking, and is designed to reflect real-life language use in academic and everyday contexts.</p>
    <p id='QnPara'>The IELTS scoring system ranges from 0 to 9, with half-point scores available, allowing for a detailed assessment of language proficiency. Each band score corresponds to a level of English competence, from non-user (score of 0) to expert (score of 9). Different institutions and organizations set their own score requirements based on their specific needs, often requiring scores in the range of 6.0 to 8.0 for admission or employment.</p>
          </div>

          <div className="col-md-6 align-items-center" id='KeyDiv'>
    <h2 id='Key'><b>Key Aspects of IELTS</b></h2>
    <ul id='UL'>
        <li><b>Informality:</b> IELTS Speaking test may include casual language and informal phrases, reflecting natural conversation.</li>
        <li><b>Pronunciation and Accent:</b> Candidates' pronunciation and accents are evaluated, with recognition that variations exist, such as British and American English.</li>
        <li><b>Intonation and Rhythm:</b> The use of intonation and rhythm is important, as it helps convey meaning and emotion, and is assessed during the Speaking test.</li>
        <li><b>Interactive Communication:</b> The Speaking test involves interactive exchanges, where candidates listen carefully and respond to questions, demonstrating their conversational skills.</li>
        <li><b>Non-verbal Communication:</b> Although the focus is on verbal skills, awareness of non-verbal cues like body language can enhance communication effectiveness.</li>
        <li><b>Spontaneity:</b> Candidates are encouraged to speak spontaneously during the Speaking test, using natural fillers and adjusting topics as needed to mimic real-life conversations.</li>
    </ul>
</div>
        </div>
      </div>
    </section>

    <section id='WhyUs'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-5">
          <h2 id='Key'><b>Why Choose Us</b></h2>
                <p id='kPara'>✔️ Kerala's most reviewed IELTS preparation institute</p>
                <p id='kPara2'>✔️ 24/7 Access to Experienced IELTS Trainers</p>
                <p id='kPara2'>✔️ 7-Day Money Back Guarantee</p>
                <p id='kPara2'>✔️ Focus on Speaking, Writing, Reading, and Listening</p>
                <p id='kPara2'>✔️ Personalized 1-on-1 Coaching Sessions</p>
          </div>
          <div className="col-md-6 p-5">
            <h2 id='head4'><b>Our Team</b></h2>
            <img src={Pic}alt="" width={400}  id='Team'  />
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section>
  <h3 class="text-center my-4" id='Plans'>IELTS Preparation Plans</h3>
  <hr />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card text-center card-hover">
          <div class="card-header">
          <b>Silver</b>
          </div>
          <div class="card-body"  id='SCard'>
        
            <p class="card-text">The Silver Package is perfect for those starting their IELTS journey, offering essential lessons, group practice sessions, and foundational feedback to build your confidence and communication skills.</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
         
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card text-center card-hover">
          <div class="card-header">
         <b>Gold</b> 
          </div>
          <div class="card-body" id='SCard'>
          
            <p class="card-text">Gold Package:
The Gold Package provides an immersive IELTS English experience, featuring weekly live sessions, interactive practice, and personalized feedback to help you speak confidently and fluently.</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
         
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card text-center card-hover">
          <div class="card-header">
          <b>Diamond</b>
          </div>
          <div class="card-body" id='SCard'>
           
            <p class="card-text">The Diamond Package offers an elite training program, including unlimited one-on-one coaching, access to exclusive resources, and personalized lesson plans designed to elevate your speaking skills</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section> 

<hr />
<section id='PlansDetails'>
  <h2 id='Plans'><b>Time Based Plans</b></h2>
  <hr />
  <div className="container">
    <div className="row">
  <div className="col-md-4">
  <div class="card text-center card-hover">
  <div class="card-header">
   <b>Part-time</b> 
  </div>
  <div class="card-body" id='SCard'>
   
    <p class="card-text">With our part-time IELTS program, you can enhance IELTS Score at a pace that suits your schedule and lifestyle.</p>
    <a href="#" class="btn btn-primary">Enroll Now</a>
  </div>
  </div>
  </div>
  <div className="col-md-4">
  <div class="card text-center card-hover">
  <div class="card-header">
    <b>Full-Time</b>
  </div>
  <div class="card-body" id='SCard'>
   
    <p class="card-text">The full-time IELTS course gives you a hands-on experience with focused training and practice to help you become fluent quickly.</p>
    <a href="#" class="btn btn-primary">Enroll Now</a>
  </div>
  </div>
  </div>
  <div className="col-md-4">
  <div class="card text-center card-hover">
  <div class="card-header">
   <b>Week-End</b>
  </div>
  <div class="card-body" id='SCard'>
   
    <p class="card-text">Perfect for busy learners looking learn IELTS to  while balancing other commitments.Flexible class time.</p>
    <a href="#" class="btn btn-primary">Enroll Now</a>
  </div>
  </div>
  </div>
</div>
</div>

</section>
<br />

    </>
  )
}

export default Ielts
