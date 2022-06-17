// import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import Head from 'next/head';
// import Image from "../../components/Image";
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default function Home ({}) {
  return (
    
<div className={styles.main}>
            <Head>
              <title>Made In Britain</title>
              <meta name="description" content="Lucy Chuang portfolio" />
              {/* <link rel="icon" href="/favicon.ico" /> */}
              <link rel="icon" href="https://i.ibb.co/9T4ft5j/logo.png" />
              <script src="http://owlcarousel.owlgraphic.com/assets/vendors/jquery.mousewheel.min.js" defer></script>
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" defer></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" defer></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js" defer></script>
              {/* <script src=" https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js" defer></script> */}
              <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" defer></script>
              
              <script src="https://codepen.io/GreenSock/pen/7ba936b34824fefdccfe2c6d9f0b740b.css" defer></script>
              <script src="https://unpkg.co/gsap@3/dist/gsap.min.js" defer></script>
              <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js" defer></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js" defer></script>
              <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript" defer></script>


              <script src="../../assets/app.js" defer></script>

            </Head>




{/* <div className={styles.spinner-wrapper}>
<img className={styles.flyingimg} src="https://i.ibb.co/hLScpnh/13-1-1.png"/>
</div> */}

    <div className={styles.maininterior}>
      
    <div className={styles.loaderwrapper}>
    <span className={styles.loader}><span className={styles.loaderinner}> <img className={styles.figuren} src="https://i.ibb.co/PmNwYcP/mr-bean-checking-time.gif"/></span></span>
    </div>

      <div className={styles.editorialimages}>
        <div className={styles.wcontent}>

                      <header className={styles.header}>
                  <div className={styles.tlabel}>
                              <div className={styles.headeredition}>
                                <a href="../" data-location="internal">
                                  2022 LUCY CHUANG
                                </a>
                              </div>
                            <div className={styles.headertime}>06:20:22</div>
                          <div id="header-customer">
                      
                                <a href="https://www.instagram.com/is_this_gabrielle/" data-location="internal">© Created by the Internet Arcitect</a>
                      
                          </div>
                  </div>
                      </header>


                  {/* <div className={styles.text}>
                            <h1 className={styles.title} >{titleofproject}</h1>
                      <div className={styles.bodyofproject}>
                        <BlockContent blocks={bodyofproject} />
                      </div>

                      <div className={styles.tlabel}></div>

                      <span className={styles.objectcontain}>
                      </span>

                  </div> */}



                  <div className={styles.section}>
                    


                  {/* <div className={styles.text}>
                            <h1 className={styles.title} >Made In London</h1>
                      <div className={styles.bodyofproject}>
                      </div>
                      </div> */}

<div className={styles.logocont}>
    <img className={styles.logo} src="https://i.ibb.co/9T4ft5j/logo.png"/>
    </div>


<div className={styles.allscr}>

<div  className={styles.container}>
  <div className={styles.slider} id="slider-1">
    <img className={styles.item} src="https://i.ibb.co/wQKF71b/1a-1.png"/>
    <img className={styles.item} src="https://i.ibb.co/J5NxhYM/2a-1.png"/>
    <img className={styles.item} src="https://i.ibb.co/9gGpyLs/4a-1.png"/>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
  </div>
</div>

{/* https://i.ibb.co/dmGLmyy/2b-1.png*/}
<div  className={styles.container}>
  <div className={styles.slider} id="slider-1">
  <img className={styles.item} src="https://i.ibb.co/0fS3DX3/1b-1.png"/>
  <img className={styles.item} src="https://i.ibb.co/dmGLmyy/2b-1.png"/>
  <img className={styles.item} src="https://i.ibb.co/Vq5csSC/3b-1.png"/>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
  </div>
</div>

<div  className={styles.container2}>
  <div className={styles.slider} id="slider-1">
  <img className={styles.item} src="https://i.ibb.co/w4jrQkY/1c-1.png"/>
  <img className={styles.item} src="https://i.ibb.co/B3jCknM/2c-1.png"/>
  <img className={styles.item} src="https://i.ibb.co/tPzcDPB/3c-1.png"/>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
  </div>
</div>


</div>








                 </div>
        </div>
      </div>
    </div>



</div>
  );
};


