import React from 'react'
import '../Css/About.css'
import ABOUTUS from '../Images/ABOUTUS.png'
import Live from '../Images/Live.png'
import Qbank from '../Images/Qbank.png'
import Doubt from '../Images/Doubt.png'
import Notes from '../Images/Notes.png'
const About = () => {
  return (
    <>
    <section id='imgAbout'>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
      <img src={ABOUTUS} class="d-block w-100" alt="..." id='imgTag'/>
      </div>
    </div>
  </div>
  </section>
<section >
<div className="container-fluid">
  <div className="row">
    <div className="col-md-6" id='img2'>
<img src={Live} width={400}/>
    </div>
    <div className="col-md-6" id='details'>
<h1><b>Interactive Live Classes &</b> </h1>
<h1><b>Recorded Sessions</b></h1>
<p>Unlock over 700 hours of recorded lessons with India's top educators, designed to enhance your learning experience through concept-oriented teaching. Our expert faculty, renowned for their depth of knowledge and effective instructional methods, help students grasp complex topics quickly and thoroughly. With pre-recorded classes accessible at your convenience, you can continually revise and reinforce your understanding, ensuring long-lasting retention of knowledge. Transform your educational journey with engaging, high-quality content that makes learning effective and enjoyable, and experience the difference that structured, concept-driven instruction can make in building a solid foundation for your studies.</p>
    </div>
  </div>
</div>
</section>





<section id='Doubt'>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-6">
      <h1 id='HLive'> <b>Live Doubt Clearing Sessions</b></h1>
<p id='D-Para'>Origami is revolutionizing education by offering live doubt clearing sessions specifically designed to meet individual student needs. Recognizing that each student faces unique challenges and learns at different paces, Origami provides a platform where students can seek immediate assistance from experienced tutors in real time. This personalized support enables students to address their specific questions and clarify complex concepts, ensuring they receive the guidance necessary for their academic success. The flexibility of scheduling these sessions allows students to access help when they need it most, fostering a supportive learning environment that encourages engagement and active participation. With expert tutors guiding them through their challenges, students not only enhance their understanding of subjects but also build confidence in their abilities. This approach empowers learners to take charge of their educational journeys, preparing them for exams and assessments while developing critical problem-solving skills. By prioritizing immediate feedback and tailored assistance, Origami is at the forefront of modern education, equipping students with the tools they need to thrive in an ever-evolving academic landscape.</p>
    </div>
    <div className="col-md-6">
    <img src={Doubt} width={500} id='DoubtImg'/>
    </div>
  </div>
</div>

</section>

<section id='Notes'>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
      <img src={Notes} width={500} id='NotesImg'/>
      </div>
      <div className="col-md-6" id="NotesUL">
        <h1><b>Hand Written Notes</b></h1>
  <p>Tutors provide clear and concise handwritten notes during sessions.
  Notes are tailored to address specific student queries.
  Notes are written in simple language, making complex concepts more accessible.
  Handwritten notes often include diagrams, charts, and illustrations to aid comprehension.
  Notes are customized based on individual student needs and questions.
  Students can revisit these notes after the session for further review.
  This collection serves as a valuable tool for ongoing learning.</p>
      </div>
    </div>
  </div>
</section>




<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <h1 id='Qtext'> <b>Q-Bank</b></h1>
      <p id='QPara'>At Origami English Training Institute, we are dedicated to helping students excel in their language proficiency tests and improve their spoken English skills. We offer a comprehensive range of resources, including a curated collection of previous year questions and a robust question bank specifically for IELTS and OET preparation. Our realistic mock tests simulate actual exam conditions, helping you build confidence and improve time management. Additionally, our focused spoken English training programs empower students to enhance their communication skills, fluency, and pronunciation with personalized guidance from experienced instructors. Join us at Origami English Training Institute to unlock your language potential and achieve your goals!</p>
      </div>

      <div className="col-md-6">
      <img src={Qbank} width={800} id='Qpic'/>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default About
