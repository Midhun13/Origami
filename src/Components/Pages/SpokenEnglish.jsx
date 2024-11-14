import React from 'react'
import '../Css/SpokenEnglish.css'
import Spoken1 from '../Images/Spoken1.png'
import foot from '../Images/foot.png'

const SpokenEnglish = () => {
  return (
    
    <>
    <section id='sect1'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" id='QnDiv'>
          <h2 id='Qn'>What is Spoken-English</h2>
    <p id='QnPara'><b>Spoken English</b> refers to the version of the English language used in everyday conversations and informal communication. Unlike written English, which is typically more structured and formal, spoken English is characterized by its casual and natural flow. It includes everyday vocabulary, colloquial expressions, and idiomatic phrases that reflect how people speak. Pronunciation can vary widely based on regional accents and dialects, contributing to the rich diversity of the language. Spoken English is often accompanied by non-verbal cues, such as gestures and facial expressions, enhancing the meaning conveyed. Conversations are interactive and spontaneous.Additionally, the way English is spoken can change depending on cultural influences and social contexts, resulting in various forms like African American Vernacular English or Indian English.</p>
          </div>

          <div className="col-md-6 align-items-center" id='KeyDiv'>
            <h2 id='Key'><b>key aspects of spoken English</b></h2>
            <ul id='UL'>
              <li><b>Informality:</b> Spoken English is casual and often includes slang and informal phrases.</li>
              <li><b>Pronunciation and Accent:</b> How English sounds can change based on where someone is from, such as British or American accents</li>
              <li><b>Intonation and Rhythm:</b>The rise and fall of the voice in spoken English helps express meaning and emotions.</li>
              <li><b>Interactive:</b> Spoken English involves back-and-forth exchanges where people listen and respond to each other.</li>
              <li><b>Non-verbal Communication:</b> Body language and gestures add meaning to what is said.</li>
              <li><b>Spontaneity:</b> Conversations can be spontaneous, with people often using fillers like "um" or changing topics quickly.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id='WhyUS'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" id='WhyUSDiv'>
            <h2 id='Key'><b>Why Us</b></h2>
            <p id='kPara'>✔️ Kerala's most reviewed Spoken English institute</p>
            <p id='kPara2'>✔️ 24-Hours Trainers Available</p>
            <p id='kPara2'>✔️ 7 days money back guarantee</p>
            <p id='kPara2'>✔️ Talking Based
Learning</p>
<p id='kPara2'>✔️ 1 on 1 Personal
Training</p>
          </div>
          <div className="col-md-6">
            <h2 id='head4'><b>Our Team</b></h2>
           <img src={Spoken1} width={400} id='Team' />
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section>
  <h3 class="text-center my-4" id='Plans'>Spoken English Plans</h3>
  <hr />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card text-center card-hover">
          <div class="card-header">
          <b>Silver</b>
          </div>
          <div class="card-body"  id='SCard'>
        
            <p class="card-text">The Silver Package is perfect for those starting their spoken English journey, offering essential lessons, group practice sessions, and foundational feedback to build your confidence and communication skills.</p>
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
The Gold Package provides an immersive spoken English experience, featuring weekly live sessions, interactive practice, and personalized feedback to help you speak confidently and fluently.</p>
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
           
            <p class="card-text">The Diamond Package offers an elite spoken English training program, including unlimited one-on-one coaching, access to exclusive resources, and personalized lesson plans designed to elevate your speaking skills</p>
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
   
    <p class="card-text">With our part-time spoken English program, you can enhance your communication skills at a pace that suits your schedule and lifestyle.</p>
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
   
    <p class="card-text">The full-time spoken English course gives you a hands-on experience with focused training and practice to help you become fluent quickly.</p>
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
   
    <p class="card-text">Perfect for busy learners looking to improve their speaking skills while balancing other commitments.</p>
    <a href="#" class="btn btn-primary">Enroll Now</a>
  </div>
  </div>
  </div>
</div>
</div>

</section>
<br />
<section>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-4">
    <img src={foot} width={400} id='Team' />
    </div>
    <div className="col-md-4">
    <img src={foot} width={400} id='Team' />
    </div>
    <div className="col-md-4">
    <img src={foot} width={400} id='Team' />
    </div>
  </div>
</div>
</section>
    </>
  )
}

export default SpokenEnglish
