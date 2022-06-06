import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { NextScript } from "next/document";
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home({ posts }) {

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'wie5l8nw',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImagefirsttwo: imgBuilder.image(p.mainImagefirsttwo),
            mainImagesecondtwo: imgBuilder.image(p. mainImagesecondtwo),
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
        {/* <link rel="icon" href="/favicon.ico" /> */}
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

{/* blobs */}
{/* <div class="mid" > */}
    <div className='overflow-hidden opacity-95'>
      <img className={styles.figure} src="https://i.ibb.co/CHJt59L/8.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/NW7BvFs/6.png" /> 
        <img className={styles.figure3} src="https://i.ibb.co/SvtsSWZ/7.png" /> 
        <img className={styles.figure4} src="https://i.ibb.co/CHJt59L/8.png"/>
        <img className={styles.figure5} src="https://i.ibb.co/NW7BvFs/6.png" /> 
        <img className={styles.figure6} src="https://i.ibb.co/NW7BvFs/6.png" />
        <img className={styles.figure7} src="https://i.ibb.co/SvtsSWZ/7.png" /> 
        <img className={styles.figure8} src="https://i.ibb.co/CHJt59L/8.png"/>
        <img className={styles.figure9} src="https://i.ibb.co/SvtsSWZ/9.png" /> 
    </div>
    {/* </div> */}


  


    {/* <div className={styles.container}>
  <div id="item0" className={styles.item}>A</div>
  <div id="item1" className={styles.item}>B</div>
</div> */}

{/* <div class="container">
  <div>OUR STORY</div>
  <div class="hscroll">
    Lorem ipsum dolor sit amet
  </div>  
</div> */}



{/* everything */}
       {/* <h1 className=' text-9xl text-[white]'>Home</h1> */}
       {/* className=' pb-5 text-5xl  text-[white]' */}


{/* landing image */}
<section className='h-[70vh]'></section>


{/* headding text */}
       <section className=' text-light  justify-center text-left p-10 mx-auto '>
       <h2 className={styles.headtext1} >Lorem ipsum <i>dolor sit amet</i>, consectetur adipiscing elit, 
       sed do eiusmod.</h2>
       <h2 className={styles.headtext1} > Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
       ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
       <h2 className={styles.headtext2} >
       Duis aute irure dolor in reprehenderit in <i>voluptate</i> velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h2>
       </section>

{/* two projects */}
 <section className='h-[30vh]'>
 {/* <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}>
              <h3 lassName={styles.text}>{p.title}</h3>
              <img className={styles.mainImage} src={p.mainImage} />
            </div>
          )) : <>No Posts Yet</>}
        </div> */}


        <div className=' object-center container grid w-5/6 grid-cols-2 gap-1 mx-auto '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/firsttwo/${p.slug.current}`)} key={index}>
              <div className='z-0'>
                {/* hover:saturate-50 w-96  hover:z-0 */}
                      <div className={styles.containerproject}>
                        <img  className={styles.mainImage} src={p.mainImagefirsttwo} />
                        <p><span className={styles.titleofprojects}>{p.titleofproject}</span></p>
                      </div>
                      {/* <div className=" text-center object-center text-lg z-50 font-light ">{p.summary}</div> */}
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>
 </section>




{/* more images flower */}

<section className='h-[20vh]'>
<div className={styles.containerflyingimg}>
  <div className="hscroll">
        <img className={styles.flyingimg} src="https://i.ibb.co/9ZNbgcj/13.png"/>
        </div> 
        </div>

<div className='overflow-hidden'>
        <img className={styles.flower1} src="https://i.ibb.co/xzd0Kz4/9.png"/>
        {/* <img className={styles.figure2} src="https://i.ibb.co/NW7BvFs/6.png" /> 
        <img className={styles.figure3} src="https://i.ibb.co/SvtsSWZ/7.png" />  */}
    </div>

</section>




<section className='pt-96 h-screen'>
<div className='overflow-hidden'>
        {/* <img className={styles.bigimg} src="https://i.ibb.co/42cmKK0/EH1A0084.png"/> */}
        <img className={styles.bigimg} src="https://i.ibb.co/2nX1L0V/documentary-link-1.png"/>
        <img className={styles.blur} src="http://www.featmagazine.com/img/5e1db3e96f1ee32ca6236df1/2657572/upload-36df3052-974a-42e3-8d8c-78347c782a7e.png" /> 
        {/* <img className={styles.figure3} src="https://i.ibb.co/SvtsSWZ/7.png" />  */}
        

      <div className={styles.containerflytext}>
          <div class="hscroll2">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum 
          </div>  
      </div>


    </div>
</section>



<section >

{/* BACK IMG */}
    <div className='overflow-hidden'>
      <div className={styles.test2}></div>
    </div>



    <div>
      <img className={styles.ranimgsec2} src="https://i.ibb.co/yyX4PqP/3.png"/>
    </div>

    <div>
      <img className={styles.ranimg2sec2} src="https://i.ibb.co/42cmKK0/EH1A0084.png"/>
      <img className={styles.rantext2sec2back} src="http://www.featmagazine.com/img/5e1db3e96f1ee32ca6236df1/2657572/upload-860b97a6-51ee-467b-9154-5ba8498ced5c.png"/>
      <div className={styles.rantext2sec2}>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum 
          </div>
      <img className={styles.containerproject3} src="https://i.ibb.co/7VJRzD2/4.png"/>
    </div>



    <div className=' pt-40 object-center container grid w-5/6 grid-cols-2 gap-1 mx-auto '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/secondtwo/${p.slug.current}`)} key={index}>
              <div className='z-0 '>
                      <div className={styles.containerproject2}>
                        <img  className={styles.mainImage2} src={p.mainImagesecondtwo} />
                        <p><span className={styles.titleofprojects}>{p.titleofprojecttwo}</span></p>
                      </div>
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>


</section>




  </main>


      {/* <footer className={styles.footer}>

      <p>© Lucy Chuang 2021</p>

      </footer> */}
    </div>
  )
}


export const getServerSideProps = async pageContext => {
  // const query = encodeURIComponent('*[ _type == "firsttwo" ]');
  const query = encodeURIComponent('*[ _type in ["firsttwo", "secondtwo"]]');
  const url = `https://wie5l8nw.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};
