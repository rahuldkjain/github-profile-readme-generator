import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [opacity, setOpacity] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 30) {
            setOpacity(1);
        } else {
            setOpacity(0);
        }
      };
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
          position: "fixed",
          bottom: "100px",
          right: "28px",
          backgroundColor: "black",
          fontSize: "20px",
          color: 'white',
          borderRadius: "50%",
          cursor: "pointer",
          transition: ".5s ease",
          opacity:opacity,
          zIndex:9999,
        }}
        onClick={() =>window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}
      >
        &uarr;
      </div>
    );
  }
  