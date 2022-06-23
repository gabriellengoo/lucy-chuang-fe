import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
// import style from '../../styles/Post.module.scss';
// import BlockContent from '@sanity/block-content-to-react';
import Head from 'next/head';
import Image from "../../components/Image";
// import Carousel from 'react-spring-3d-carousel';
import React from "react";
import ReactDOM from "react-dom";
// import Example from "./example";
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module



export const Post = ({ titleofproject, mainImagefirsttwo, images }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )


  console.log(
    images)
  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'wie5l8nw',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(mainImagefirsttwo));
  }, []);



  return (
    
<div className={styles.main}>
            <Head>
              <title>{titleofproject}</title>
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
              {/* <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript" defer></script> */}


              <script type="module" src="../../assets/app.js" defer></script>

            </Head>


            <noscript>
		You need to enable JavaScript to run this site.
	</noscript>

{/* <div className={styles.spinner-wrapper}>
<img className={styles.flyingimg} src="https://i.ibb.co/hLScpnh/13-1-1.png"/>
</div> */}








    <div className={styles.maininterior}>
      
    {/* <div className={styles.loaderwrapper}>
    <span className={styles.loader}><span className={styles.loaderinner}> <img className={styles.figuren} src="https://i.ibb.co/PmNwYcP/mr-bean-checking-time.gif"/></span></span>
    </div> */}

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
                    


                  <div className={styles.text}>
                            <h1 className={styles.title} >{titleofproject}</h1>
                            {/* <h2>{categories}</h2> */}
                      {/* <div className={styles.bodyofproject}> */}
                        {/* <BlockContent blocks={bodyofproject} /> */}
                      {/* </div> */}
                      </div>









                  <div className={styles.hscroll3}>
                  {/* <div className="hscroll3"> */}
                        {images.map(({ _key, asset }, image) => ( <Image key={_key} identifier="image" image={asset} />
                        ))}
                        </div>
                      {/* </div> */}
                      </div>








        </div>
      </div>
    </div>



</div>
  );
};




export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "firsttwo" && slug.current == "${pageSlug}" ]`);
  const url = `https://wie5l8nw.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        // bodyofproject: post.bodyofproject,
        titleofproject: post.titleofproject,
        mainImagefirsttwo: post.mainImagefirsttwo,
        // categories: post.categories,
        images: post.images,
      }
    }
  }
};

export default Post;