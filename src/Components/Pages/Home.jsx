import React from 'react';
import '../Css/Home.css'
import Banner1 from '../Images/Banner1.png'
import Banner2 from '../Images/Banner2.png'
import Banner3 from '../Images/Banner3.png'
import Banner4 from '../Images/Banner4.png'
import Banner5 from '../Images/Banner5.png'
import Alumni1 from '../Images/Alumni1.jpg'
import Alumni4 from '../Images/Alumni4.jpg'

import Pro1 from '../Images/Pro1.jpeg'
import Pro2 from '../Images/Pro2.jpeg'
import Pro3 from '../Images/Pro3.jpeg'
import Pro4 from '../Images/Pro4.jpeg'
import Pro5 from '../Images/Pro5.jpeg'
import Pro6 from '../Images/Pro6.jpeg'

const Home = () => {
  return (
    <>
   <section>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={Banner1} className="d-block w-100" alt="Banner"  height={390}/>
          </div>

          <div className="carousel-item " data-bs-interval="2000">
            <img src={Banner2} className="d-block w-100" alt="Banner2" height={390}/>
          </div>
          <div className="carousel-item ">
            <img src={Banner3} className="d-block w-100" alt="Banner2" height={390} />
          </div>
          <div className="carousel-item ">
            <img src={Banner4} className="d-block w-100" alt="Banner2" height={390} />
          </div>
          <div className="carousel-item ">
            <img src={Banner5} className="d-block w-100" alt="Banner2" height={390} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </section>

  <section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6" id="left">
   
        <h3><b className='head1'>Origami English Institute</b></h3>
        <h4><b  className='Quote'>Unlock Your Potential in English Language Proficiency</b></h4>

        <p className='p1'>At Origami English Institute, we specialize in empowering individuals to master the English language with confidence. Our comprehensive training programs focus on <b>spoken English</b>, <b>IELTS preparation</b>, and <b>Occupational English Test (OET)</b> coaching. What sets us apart is our commitment to personalized learning. We offer weekend tests to assess your progress, ensuring that you are always on track to meet your goals. Our unique approach includes daily speaking practice, allowing you to gain fluency and comfort in real-life conversations.</p>

        <p>We also provide free study materials to support your learning journey, making quality education accessible to all. With a strong emphasis on one-on-one attention, our experienced instructors tailor lessons to meet your individual needs, helping you overcome challenges and build on your strengths. Join us at Origami English Institute and take the next step toward achieving your English language goals in a supportive and engaging environment. Your success is our mission!</p>
      </div>
      
      
      <div className="col-md-6" id="right">
        <div>
          <h2 className='head2'><b>Alumni</b></h2>
          <p>Our previous alumni, John and Tailor, who both scored a remarkable 9 band in IELTS, have gone on to achieve great success in their academic and professional pursuits. We are proud of their accomplishments! Join our community and see what you can achieve!</p>
          <div className='Alumni'>
          <img src={Alumni1} width={200} height={250}className='Alumni-img' />
          <img src={Alumni4} width={200} height={250} className='Alumni-img' />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className='Faculties'>
  <div className="container">
    <div className="row p-3" >
      <h2 className='head3'><b> Our Faculties</b> </h2>
      <div className="col-md-4" >
      <div class="card" style={{width:270}}>
        <img src={Pro1} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text"><b>Alisha Mam </b>is a skilled spoken English teacher who uses interactive techniques to boost students’ confidence and fluency in conversation.</p>
</div>
</div>
      </div>
      <div className="col-md-4" >
      <div class="card" style={{width:270}}>
        <img src={Pro2} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text"><b>Prof.John</b> is an outstanding IELTS instructor who helps students excel through tailored practice and engaging speaking activities in every session.</p>
</div>
</div>


      </div>

      <div className="col-md-4" >
      <div class="card" style={{width:270}}>
        <img src={Pro3} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text"> <b>Prof.Jack </b>brings a wealth of experience in spoken English instruction, using innovative teaching methods that enhance their communication skills 

</p>
</div>
</div>


      </div>
    </div>
    
  </div>
</section>

<section className='Faculties2'>
  <div className="container">
    <div className="row p-3">
      <div className="col-md-4">
      <div className="col-md-4" >
      <div class="card" style={{width:270}}>
        <img src={Pro4} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text"><b>Alexander Sterling</b> has a proven track record in preparing students for the IELTS speaking test, utilizing mock interviews and feedback sessions that empower candidates. </p>
</div>
</div>
      </div>
      </div>
      <div className="col-md-4">
      <div className="col-md-4" >
      <div class="card" style={{width:270}}>
        <img src={Pro5} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Trainer <b>Tailor</b> excels in delivering comprehensive English courses, helping learners improve their fluency and pronunciation while preparing for various English proficiency exams.</p>
</div>
</div>
      </div>
      </div>

      <div className="col-md-4">
      <div className="col-md-4" >
      <div class="card" style={{width:270}}>
        <img src={Pro6} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text"><b>Dr.Peter Jackson</b> specializes in OET coaching, employing real-life scenarios and role-plays to ensure candidates feel confident and well-prepared for their assessments.</p>
</div>
</div>
      </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container-fluid">
    <div className="row" id='No1'>
      <div className="col-md-12">
        <h2>What Makes us <b>No.1</b> in English Training Institute </h2>
        <p id='No1Para'>At our English training institute, we pride ourselves on being No. 1 due to our expert instructors and comprehensive curriculum tailored to all levels. We offer personalized learning experiences with customized plans, utilizing innovative teaching methods and technology to engage students effectively. Our proven success rates demonstrate our commitment to helping students achieve their desired scores in exams like IELTS and OET. Additionally, we provide a supportive and inclusive environment, flexible learning options, and access to supplementary resources, ensuring every student has the tools they need for success. Our dedication to continuous improvement keeps our programs up-to-date and relevant, making us a leader in English language training.</p>
      </div>
    </div>
  </div>
</section>

<section id='SectFeedback'>
    <div className="container my-4">
      <h2 id='feedback'><b>Feedback From Our Students</b></h2>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000" style={{ backgroundColor: '#343a40' }}>
                    <div style={{ minHeight: '140px', color: 'white' }}>
                        <div className="carousel-caption d-block">
                            <h5 style={{ color: 'white' }}>William</h5>
                            <p style={{ color: 'white' }}>Best Study Environment ⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000" style={{ backgroundColor: '#343a40' }}>
                    <div style={{ minHeight: '140px', color: 'white' }}>
                        <div className="carousel-caption d-block">
                            <h5 style={{ color: 'white' }}>Christopher</h5>
                            <p style={{ color: 'white' }}>Best Faculties ⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" style={{ backgroundColor: '#343a40' }}>
                    <div style={{ minHeight: '140px', color: 'white' }}>
                        <div className="carousel-caption d-block">
                            <h5 style={{ color: 'white' }}>Amanda</h5>
                            <p style={{ color: 'white' }}>Best IELTS Training Institute ⭐⭐⭐⭐ </p>
                        </div>
                    </div>
                </div>

                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</section>



  </>
  );
}

export default Home;
