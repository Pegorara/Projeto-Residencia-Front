// import { useState } from 'react';

import { CCarousel,CCarouselItem, CImage, } from '@coreui/react';

export function AppCarrossel(){

    const slides =
    [
    "https://th.bing.com/th/id/R.0e91a1da0cd4eff516c7a37bee4ec9b5?rik=k%2fDlnv1eX8GfwQ&pid=ImgRaw&r=0",
    "https://i.ytimg.com/vi/KskSGH0k0es/maxresdefault.jpg",
    "https://lightwallpapers.com/media/1600x900/0-129.jpg"
    ];

    // const [activeIndex, setActiveIndex] = useState(0)
    return (
       <CCarousel controls indicators style={{overflow:"hidden",margin:"2rem auto", width:'80vw', height:"38vh", backgroundColor:"royalblue"}}>
  <CCarouselItem>
    <CImage className="d-block" src={slides[0]} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block" src={slides[1]} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block" src={slides[2]} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
    )
}