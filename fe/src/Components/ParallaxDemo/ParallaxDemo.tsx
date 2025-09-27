import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax'
import useDetectScroll, {
  Axis,
  Direction
} from '@smakss/react-scroll-direction';

// Little helpers ...
// const url = (name: string, wrap = false) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function ParallaxDemo() {
  const parallax = useRef<IParallax>(null!)
  const [customElement, setCustomElement] = useState<HTMLDivElement>();
  const { scrollDir } = useDetectScroll({ axis: Axis.Y, target: customElement });
  const [pageNo, setPageNo] = useState(0);
  const PAGES = 3;

  // useEffect(() => {
  //   // You can call scrollTo here after the component mounts
  //   // For example, to scroll to page 1 (index 0) after a delay
  //   const timer = setTimeout(() => {
  //     if (parallax.current) {
  //       parallax.current.scrollTo(1); // Scrolls to the second page (index 1)
  //     }
  //   }, 0);

  //   // Cleanup the timeout if the component unmounts before the scroll
  //   return () => clearTimeout(timer);
  // }, []); 

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(parallax.current, parallax.current?.container?.current);
      if(parallax.current) {
          setCustomElement(parallax.current.container.current);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (parallax.current) {
  //       const nextPage = (Math.floor(parallax.current.offset) + 1) % 3;
  //       parallax.current.scrollTo(nextPage);
  //     }
  //   }, 2000);
  //   return () => clearInterval(interval);
  // })

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (scrollDir) {
        case Direction.Down: {
          // console.log("down", Math.ceil(parallax.current.current / (2 * parallax.current.space) * (PAGES - 1)))
          const nextPage = Math.ceil(parallax.current.current / (2 * parallax.current.space) * (PAGES - 1))
          if (nextPage !== pageNo) {
            setPageNo(nextPage);
            parallax.current.scrollTo(nextPage);
          }
          break;
        }
        case Direction.Up: {
          // console.log("up", Math.floor(parallax.current.current / (2 * parallax.current.space) * (PAGES - 1)))
          const previousPage = Math.floor(parallax.current.current / (2 * parallax.current.space) * (PAGES - 1))
          if (previousPage !== pageNo) {
            setPageNo(previousPage);
            parallax.current.scrollTo(previousPage);
          }
          break;
        }
      }
      // console.log('scrollDir', scrollDir, Math.round(parallax.current.current / (2 * parallax.current.space) * 2));
    }, 50);
    return () => clearTimeout(timer);
    // if (scrollDir === Direction.Down) {
    //   const nextPage = Math.min(parallax.current.offset + 1, 2);
    //   console.log('nextPage', nextPage);
    //   parallax.current.scrollTo(nextPage);
    // } else if (scrollDir === Direction.Up) {
    //   const previousPage = Math.max(parallax.current.offset - 1, 0);
    //   console.log('previousPage', previousPage);
    //   parallax.current.scrollTo(previousPage);
    // } 
  }, [parallax.current?.current]);

  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3} style={{ scrollSnapType: 'y mandatory' }}>

        <ParallaxLayer offset={0}  style={{ backgroundColor: '#509b5aff', scrollSnapAlign: 'center' }} />
        <ParallaxLayer offset={1}  style={{ backgroundColor: '#805E73', scrollSnapAlign: 'center' }} />
        <ParallaxLayer offset={2}  style={{ backgroundColor: '#87BCDE', scrollSnapAlign: 'center' }} />

        {/* <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        /> */}

        {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => { console.log(parallax.current); parallax.current.scrollTo(1) }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => { console.log(parallax.current); parallax.current.scrollTo(2) }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => { console.log(parallax.current); parallax.current.scrollTo(0) }}
          >
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  )
}
