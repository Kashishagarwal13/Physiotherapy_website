import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import {PuffLoader} from 'react-spinners'
import r2 from '../Residencies/r11.jpeg'
import r1 from '../Residencies/acu.jpeg'
import r3 from '../Residencies/ath.webp'
import r4 from '../Residencies/orthotic.jpeg'
import r5 from '../Residencies/chiro.jpeg'
import r6 from '../Residencies/massage.avif'

const Residencies = () => {

  const {data, isError, isLoading} = useProperties()

  if(isError){
    return(
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
        />
      </div>
    )
  }


  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Services</span>
        </div>
        <Swiper >
          
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
           
           <div className="retoy">
           <div className="r-card">
                <img src={r2} alt="home"   />
                <span className="secondaryText r-price">
              
             
                </span>
                <span className="primaryText">Registered Massage therapy</span><br/>
                <span className="secondaryText">Are you treating injuries, or preparing and recovering from surgery? Perhaps you just need some time to relax? Indulge in the rejuvenating benefits of registered massage therapy at our clinic.  Experience the healing touch of our skilled professionals as they help you unwind, restore balance, and revitalize your body and mind.</span>
              </div>
              <div className="r-card">
                <img src={r3} alt="home" />
                <span className="secondaryText r-price">
              
             
                </span>
                <span className="primaryText">Athletic Taping</span><br/>
                <span className="secondaryText">Elevate your athletic performance with our specialized taping service. From injury prevention to enhanced stability, our expert taping techniques provide the support you need to excel in your sport. Trust our experienced team to tape you up, so you can push your limits with confidence and stride towards victory</span>
              </div>
              <div className="r-card">
                <img src={r1} alt="home" />
                <span className="secondaryText r-price">
              
             
                </span>
                <span className="primaryText">Acupuncture</span><br/>
                <span className="secondaryText">Discover the ancient art of acupuncture, where healing meets holistic balance. Our skilled practitioners tailor each session to your unique needs, guiding you on a journey towards wellness and vitality. Experience the transformative power of acupuncture and unlock your body's natural potential for health and vitality.</span>
              </div>
              <div className="r-card">
                <img src={r4} alt="home" />
                <span className="secondaryText r-price">
              
             
                </span>
                <span className="primaryText">Custom Orthotics</span><br/>
                <span className="secondaryText">Step into comfort and support with our custom orthotic service. Our skilled specialists craft orthotics tailored to your unique foot anatomy, providing relief from discomfort and promoting proper alignment. Say goodbye to foot pain and hello to improved mobility and comfort with our personalized orthotic solutions."</span>
              </div>
              <div className="r-card">
                <img src={r5} alt="home" />
                <span className="secondaryText r-price">
              
             
                </span>
                <span className="primaryText">Chiropratic</span><br/>
                <span className="secondaryText">"Discover the natural path to wellness with our chiropractic services. Our experienced chiropractors offer personalized treatments to address spinal misalignments, alleviate pain, and enhance overall health. Let us help you restore balance, improve mobility, and live your life to the fullest</span>
              </div>
              <div className="r-card">
                <img src={r6} alt="home" />
                <span className="secondaryText r-price">
              
             
                </span>
                <span className="primaryText">Relaxation Massage</span><br/>
                <span className="secondaryText">Escape the stresses of daily life and indulge in our relaxation massage service. Let our skilled therapists melt away tension and soothe your muscles with gentle, rhythmic strokes. Experience a tranquil oasis where you can unwind, rejuvenate, and emerge feeling refreshed and revitalized.</span>
              </div>
             
         
             
           
          
          
              
           
           
           </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;


