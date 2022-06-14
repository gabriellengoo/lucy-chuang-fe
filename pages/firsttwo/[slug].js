import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import Head from 'next/head';
import Image from "../../components/Image";


export const Post = ({ titleofproject, bodyofproject, mainImagefirsttwo, images }) => {
  const [imageUrl, setImageUrl] = useState('');

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
              <script src="http://owlcarousel.owlgraphic.com/assets/vendors/jquery.mousewheel.min.js" defer></script>
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" defer></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" defer></script>
              {/* <script src=" https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js" defer></script> */}
              <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" defer></script>
              
              <script src="https://codepen.io/GreenSock/pen/7ba936b34824fefdccfe2c6d9f0b740b.css" defer></script>
              <script src="https://unpkg.co/gsap@3/dist/gsap.min.js" defer></script>
              <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js" defer></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js" defer></script>


              <script src="../../assets/app.js" defer></script>
            </Head>




    <div className={styles.maininterior}>
      <div className={styles.editorialimages}>
        <div className={styles.wcontent}>

                      <header className={styles.header}>
                  <div className={styles.tlabel}>
                              <div className={styles.headeredition}>
                                <a href="../" data-location="internal">
                                  2022 LUCY CHUANG
                                </a>
                              </div>
                            <div className={styles.headertime}>03:19:31</div>
                          <div id="header-customer">
                      
                                <a href="https://www.instagram.com/is_this_gabrielle/" data-location="internal">© Created by the Internet Arcitect</a>
                      
                          </div>
                  </div>
                      </header>


                  <div className={styles.text}>
                            <h1 className={styles.title} >{titleofproject}</h1>
                            {/* <h2>{categories}</h2> */}
                      <div className={styles.bodyofproject}>
                        <BlockContent blocks={bodyofproject} />
                      </div>

                      <div className={styles.tlabel}></div>

                      <span className={styles.objectcontain}>

                                  {/* <div className={styles.mainImage}>
                    <Image identifier="image" image={mainImagefirsttwo} /> */}
                    {/* <div>
                      {images.map(({ _key, asset }, image) => ( <Image key={_key} identifier="image" image={asset} />
                      ))}
                    </div> */}

      {/* </div>  */}
                      {/* {imageUrl && <img  className="mid" src={imageUrl} data-cursor="crosshair" />} */}
                      </span>
                      {/* {imageUrl && <img className={styles.mainImage} src={imageUrl} />} */}

                  </div>



                  <div className={styles.section}>
                  {/* <div className="hscroll"> */}
                        {images.map(({ _key, asset }, image) => ( <Image key={_key} identifier="image" image={asset} />
                        ))}
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
        bodyofproject: post.bodyofproject,
        titleofproject: post.titleofproject,
        mainImagefirsttwo: post.mainImagefirsttwo,
        // categories: post.categories,
        images: post.images,
      }
    }
  }
};

export default Post;