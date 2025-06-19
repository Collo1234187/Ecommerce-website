import '@google/model-viewer';
import React from 'react'

import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import './Hero.css'

export const Hero = () => {
  const navigate = useNavigate();
   
 const products = React.useMemo(() => [
  { id: 1, name: "Sofas", model: "/Models/leather-sofa-obj.glb", route:"/sofa" },
  { id: 2, name: "dining", model: "/Models/luxury_dinning_table_set.glb", route:"/dining" },
  { id: 3, name: "chairs", model: "/Models/swivel_chair.glb", route:"/chair" },
  { id: 4, name: "mattress", model: "/Models/mattress.glb", route:"/mattress" },
  { id: 5, name: "pillow", model: "/Models/pillow.glb", route:"/pillow" },
  { id: 6, name: "bed", model: "/Models/upholstered_bed_free_model.glb", route:"/bed" }
], []);

  const lastTap = React.useRef(0);

  const handleDoubleTap = (route) => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      navigate(route); 
    }
    lastTap.current = now;
  };

  return (
    <div className="hero-container">
    
      <div className="hero-left">
        <h3>Welcome to SuperHome Interiors Furniture</h3>
        <p> Where your comfort is our business</p>
       
        
    </div>
    
      <div className="hero-swiper">
       <div> <h1 style={{color: '#1B4E45',fontSize:'30px', fontWeight:'600',textAlign:'center',padding:'4px'}}>our products</h1></div>
     <Swiper className="swiper"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
    delay: 3000, 
    disableOnInteraction: false, 
  }}
  modules={[Autoplay]} 
        style={{ width: '100%', maxWidth: '600px' }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              onClick={() => handleDoubleTap(product.route)}
              style={{ cursor: 'pointer' }}
            >  
             <p>{product.name}</p>

              <model-viewer
                src={product.model}
                alt={product.name}
                auto-rotate
                camera-controls
                ar
                disable-zoom
                style={{ width: '100%', height: '500px',textAlign:'center',}}
                environment-image="neutral"
                exposure="1"
              ></model-viewer>
           
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    
    <div className="hero-right">
      <p>we offer variety of furniture products</p>
      <p>shop with us for better quality and affordable furniture</p>
      <p>we really appreciate your presence</p>
     
    </div>
   
      
    
    </div>
  );
};