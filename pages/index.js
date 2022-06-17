import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { NextScript } from "next/document";
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// firsttwo

export default function Home({ posts }) {

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'wie5l8nw',
        dataset: 'production',
      });

      console.log(posts)
      
      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImagefirsttwo: imgBuilder.image(p.mainImagefirsttwo),
            // mainImagesecondtwo: imgBuilder.image(p.mainImagesecondtwo),
            // mainImage3: imgBuilder.image(p. mainImage3),
            // mainImage4: imgBuilder.image(p. mainImage4),
            // mainImage5: imgBuilder.image(p. mainImage5),
            // mainImage6: imgBuilder.image(p. mainImage6),
            // mainImage7: imgBuilder.image(p. mainImage7),
            // mainImage8: imgBuilder.image(p. mainImage8),
            
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);


  return (
    <div className={styles.container}>
      <Head>
        <title>Lucy Chuang</title>
        <meta name="description" content="Lucy Chuang portfolio" />
        <link rel="icon" href="https://i.ibb.co/9T4ft5j/logo.png" />
        <script src="http://owlcarousel.owlgraphic.com/assets/vendors/jquery.mousewheel.min.js" defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" defer></script>
        {/* <script src=" https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js" defer></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js" defer></script>
        
        <script src="../assets/app.js" defer></script>
      </Head>


      {/* <img objectFit={"cover"} layout={"fill"} src="https://i.ibb.co/MfgWfH4/background-e.jpg" />  */}
  <main className={styles.main}>
{/* BACK IMG */}
<div className='overflow-hidden'>
      <div className={styles.test}></div></div>
{/* BACK IMG */}
{/* <div className='overflow-hidden'>
      <div className={styles.test2}></div></div> */}
      {/* BACK IMG */}
{/* <div className='overflow-hidden'>
      <div className={styles.test3}></div></div> */}

{/* blobs */}
{/* <div className="mid" > 'overflow-hidden relative w-[140vw] opacity-95 */}
    <div className={styles.figuren}>
    <img className={styles.figuren} src="https://i.ibb.co/JnRKs4M/foreground.png"/>
    </div>
    {/* </div> */}


  


    {/* <div className={styles.container}>
  <div id="item0" className={styles.item}>A</div>
  <div id="item1" className={styles.item}>B</div>
</div> */}

{/* <div className="container">
  <div>OUR STORY</div>
  <div className="hscroll">
    Lorem ipsum dolor sit amet
  </div>  
</div> */}



{/* everything */}


       {/* <h1 className=' text-9xl text-[white]'>Home</h1> */}
       {/* className=' pb-5 text-5xl  text-[white]' */}
       <section className={styles.section} > 
       {/* <div className="intro"> */}
  <div className={styles.content}>

    <div className={styles.logocont}>
    <img className={styles.logo} src="https://i.ibb.co/9T4ft5j/logo.png"/>
    
    </div>

    <img className={styles.bigimgn} src="https://i.ibb.co/Y3s7XSH/entropy-link.png"/>

    <div className={styles.blurtopcont}>
    <img className={styles.blurtop} src="https://i.ibb.co/M7q9767/output-onlinepngtools.png"/>
    
    </div>

    <div className={styles.entropycont}> <p className={styles.entropy}>entropy entropy entropy entropy entropy entropy entropy
     entropy entropy entropy entropy entropy 
    </p>
    </div>
   
 </div>
 {/* </div>  */}
</section>





<section className={styles.section}>  
  <div className={styles.content}>
  {/* <span className={styles.dot}></span> */}
  {/* <h1 className={styles.entropyraw}>Raw Reality</h1> */}
  {/* BACK IMG */}

      <div className={styles.test3}></div>

  <div className={styles.wrapper}>
  {mappedPosts.length ? mappedPosts.map((p, id) => (
            <div onClick={() => router.push(`/firsttwo/${p.slug.current}`)} key={id}>
                      {/* <div className={styles.containerproject2}> */}
                        <img  className={styles.mainImage2} src={p.mainImagefirsttwo} />
                        <p className={styles.titleofprojectsn2}>{p.titleofproject}</p>
                  </div>
            // </div> 
          )) : <>No Posts Yet</>}
</div> 

<img className={styles.flower1n} src="https://i.ibb.co/yyX4PqP/3.png"/>
<img className={styles.flowergreen} src="https://i.ibb.co/xzd0Kz4/9.png"/>
<img className={styles.man} src="https://i.ibb.co/1Jq6bnP/5.png"/>

<div className={styles.hscrollcont}>
<div className={styles.hscroll}>
<div className="hscroll">
        <img className={styles.flyingimg} src="https://i.ibb.co/hLScpnh/13-1-1.png"/>
        <p><span className={styles.titleofprojecthottest}>Hottest In Da Metaverse</span></p>
</div> 
</div> 
</div>

<div className={styles.videocont}>
<iframe className={styles.video} src="https://drive.google.com/file/d/14w2FfWc-LfdUSPoM79y06_sdVXXG_QXa/preview?start=1"></iframe>
</div>


<img className={styles.botflower} src="https://i.ibb.co/TDXZH4y/1-2.png"/>

</div>
</section>

{/* <section className={styles.vidsection}> 
<div className={styles.containerflyingimg}>
  <div className="hscroll">
        <img className={styles.flyingimg} src="https://i.ibb.co/9ZNbgcj/13.png"/>
        {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/nineth/${p.slug.current}`)} key={index}>
                        <p><span className={styles.titleofprojecthottest}>{p.titleofproject9}</span></p>
                      </div>
             )) : <>No Posts Yet</>}
        </div> 
        </div>

        <iframe className={styles.video}src="https://drive.google.com/file/d/14w2FfWc-LfdUSPoM79y06_sdVXXG_QXa/preview?start=1"></iframe>
</section> */}

        {/* <img className={styles.flower1n} src="https://i.ibb.co/yyX4PqP/3.png"/> */}
    
          {/* {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/secondtwo/${p.slug.current}`)} key={index}>
                      <div className={styles.containerproject2}>
                        <img  className={styles.mainImage2} src={p.mainImagesecondtwo} />
                        <p><span className={styles.titleofprojectsn}>{p.titleofprojecttwo}</span></p>
                  </div>
            </div> 
            
          )) : <>No Posts Yet</>} */}


{/* {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/third/${p.slug.current}`)} key={index}>
                      <div className={styles.containerproject2}>
                        <img  className={styles.notsoImage} src={p.mainImage3} />
                        <p><span className={styles.titleofnotsoImage}>{p.titleofproject3}</span></p>
                      </div>
            </div>
          )) : <>No Posts Yet</>}


{mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/fifth/${p.slug.current}`)} key={index}>
                      <div className={styles.containerproject2}>
                        <img  className={styles.notsoImage} src={p.mainImage5} />
                        <p><span className={styles.titleofprojectsn3}>{p.titleofproject5}</span></p>
                      </div>
            </div>
          )) : <>No Posts Yet</>} */}









  </main>


      {/* <footer className={styles.footer}>

      <p>© Lucy Chuang 2021</p>

      </footer> */}
    </div>
  )
  
}


export const getServerSideProps = async pageContext => {
  // const query = encodeURIComponent('*[ _type == "firsttwo" ]');
//   '*[ _type in ["firsttwo", "secondtwo"] ]' _id == "abc.123"
  const query = encodeURIComponent(`*[ _type in ["firsttwo" ]]`);
//   const query = encodeURIComponent(`*[_id in path("1.2.3.*")]`);
  const url = `https://wie5l8nw.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());


  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
        // firsttwo: [],
        // secondtwo: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
        // firsttwo: result.result,
        // secondtwo: result.result,
      }
    }
  }
};
