import React from 'react'
import OET from '../Images/OET.png'
import '../Css/OET.css'

const Oet = () => {
  return (
  <>
  <section id='sect1'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6" id='QnDiv'>
          <h2 id='Qn'><b>What is OET ?</b></h2>
          <p id='QnPara'><b>The Occupational English Test (OET)</b> is a globally recognized assessment of English language proficiency specifically designed for healthcare professionals who are non-native speakers. It plays a crucial role for individuals seeking to work or study in English-speaking countries, particularly in healthcare settings. The test evaluates four key language skills: Listening, Reading, Writing, and Speaking, and is designed to reflect real-life language use in professional healthcare contexts.</p>

<p id='QnPara'>The OET scoring system ranges from 0 to 500, with grades reflecting different levels of language proficiency. Each score corresponds to a level of English competence, with different healthcare organizations and institutions setting their own score requirements based on their specific needs. Typically, scores in the range of 350 to 500 are required for professional registration or employment.</p>

          </div>

          <div className="col-md-6 align-items-center" id='KeyDiv'>
    <h2 id='Key'><b>Key Aspects OET</b></h2>
    <ul id='UL'>
    <li><b>Informality:</b> OET Speaking test may include casual language and informal phrases, reflecting the nature of professional conversations.</li>
    <li><b>Pronunciation and Accent:</b> Candidates' pronunciation and accents are evaluated, with recognition of variations that may occur in professional contexts, including regional accents.</li>
    <li><b>Intonation and Rhythm:</b> The use of intonation and rhythm is important, as it helps convey meaning and professionalism, and is assessed during the Speaking test.</li>
    <li><b>Interactive Communication:</b> The Speaking test involves interactive exchanges, where candidates listen attentively and respond appropriately to role-play scenarios, demonstrating their ability to engage in professional dialogue.</li>
    <li><b>Non-verbal Communication:</b> While the focus is on verbal skills, awareness of non-verbal cues, such as body language and facial expressions, can enhance communication effectiveness in a healthcare setting.</li>
    <li><b>Spontaneity:</b> Candidates are encouraged to speak spontaneously during the Speaking test, using natural fillers and adapting their responses to reflect real-life professional interactions.</li>
</ul>

</div>
        </div>
      </div>
    </section>
    <section id='WhyUs'>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 p-5">
        <h2 id='Key'><b>Why Choose Us for OET Preparation</b></h2>
        <p id='kPara'>✔️ Kerala's most reviewed OET preparation institute</p>
        <p id='kPara2'>✔️ 24/7 Access to Experienced OET Trainers</p>
        <p id='kPara2'>✔️ 7-Day Money Back Guarantee</p>
        <p id='kPara2'>✔️ Focus on Listening, Speaking, Reading, and Writing Skills</p>
        <p id='kPara2'>✔️ Personalized 1-on-1 Coaching Sessions</p>
      </div>
      <div className="col-md-6 p-5">
            <h2 id='head4'><b>Our Team</b></h2>
            <img src={OET}alt="" width={400} height={300} id='Team'  />
          </div>
    </div>
  </div>
</section>

    
    <section>
  <h3 class="text-center my-4" id='Plans'>OET Preparation Plans</h3>
  <hr />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card text-center card-hover">
          <div class="card-header">
            <b>Silver</b>
          </div>
          <div class="card-body" id='SCard'>
            <p class="card-text">The Silver Package is ideal for those beginning their OET preparation, offering essential lessons on healthcare communication, group practice sessions, and foundational feedback to build your confidence and professional communication skills.</p>
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
            <p class="card-text">The Gold Package provides an immersive OET experience, featuring weekly live sessions focused on medical vocabulary, interactive practice, and personalized feedback to help you communicate confidently and fluently in healthcare settings.</p>
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
            <p class="card-text">The Diamond Package offers an elite training program, including unlimited one-on-one coaching, access to exclusive healthcare resources, and personalized lesson plans designed to elevate your speaking and interaction skills for the OET.</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<hr />
<section id='PlansDetails'>
  <h2 id='Plans'><b>Time-Based Plans for OET</b></h2>
  <hr />
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card text-center card-hover">
          <div class="card-header">
            <b>Part-time</b> 
          </div>
          <div class="card-body" id='SCard'>
            <p class="card-text">With our part-time OET program, you can enhance your healthcare communication skills at a pace that suits your schedule and lifestyle.</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center card-hover">
          <div class="card-header">
            <b>Full-Time</b>
          </div>
          <div class="card-body" id='SCard'>
            <p class="card-text">The full-time OET course offers focused training and practice to quickly develop fluency in professional healthcare communication.</p>
            <a href="#" class="btn btn-primary">Enroll Now</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center card-hover">
          <div class="card-header">
            <b>Weekend</b>
          </div>
          <div class="card-body" id='SCard'>
            <p class="card-text">Perfect for busy learners looking to prepare for the OET while balancing other commitments, with flexible class times available.</p>
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

export default Oet
