import React from 'react'
import { Container, Row ,Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'
 
 const AboutSection = ({aboutClass}) => {
   return (
     <section className='"about__section' 
     style={
        aboutClass === "aboutPage"
        ? {marginTop:"0px" }
        : {marginTop:"280px"}
        }
     >
       <Container>
         <Row>
           <Col lg='6' md='6'>
             <div className='about__section-content'>
               <h4 className='section__subtitle'>About Us</h4>
               <h2 className='section__title'>Welcome to our service</h2>
               <p className='section__description'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                 suscipit, illum alias odit culpa provident vero placeat
                 quibusdam commodi ratione repellat eos aliquid aut non sapiente
                 quam asperiores quas tenetur? Fuga sit voluptate tenetur
                 molestiae id officiis quisquam omnis nesciunt incidunt
                 repudiandae blanditiis libero a vitae, sed deleniti quis
                 dolorem! Voluptatibus natus, cum ratione officia vel.
               </p>

               <div className='about__section-item d-flex align-items-center'>
                 <p className='section__description d-flex align-items-center gap-2'>
                   <i className='ri-checkbox-circle-line'></i>Lorem ipsum dolor
                   sit amet consectetur adipisicing elit.
                 </p>

                 <p className='section__description d-flex align-items-center gap-2'>
                   <i className='ri-checkbox-circle-line'></i>Lorem ipsum dolor
                   sit amet consectetur adipisicing elit.
                 </p>
               </div>

               <div className='about__section-item d-flex align-items-center'>
                 <p className='section__description d-flex align-items-center gap-2'>
                   <i className='ri-checkbox-circle-line'></i>Lorem ipsum dolor
                   sit amet consectetur adipisicing elit.
                 </p>

                 <p className='section__description d-flex align-items-center gap-2'>
                   <i className='ri-checkbox-circle-line'></i>Lorem ipsum dolor
                   sit amet consectetur adipisicing elit.
                 </p>
               </div>
             </div>
           </Col>

           <Col lg='6' md='6'>
             <div className='about__img'>
               <img src={aboutImg} alt='' className='w-100' />
             </div>
           </Col>
         </Row>
       </Container>
     </section>
   );
 }
 
 export default AboutSection;