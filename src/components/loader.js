import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
const animationLoader = () => { }
const Loader = () => {
    let arrow = useRef([]);
    useEffect(() => {
        var tl = new gsap.timeline({repeat: -1});
        tl.fromTo(arrow.current, {
            y: 0,
            color: '#3b3b4f',
        }, {
            y: -50,
            color: '#d0d0d5',
            stagger: 0.1,
            duration: 0.5,
            ease: 'Linear.easeNone'
        });
        tl.add('cp')
        tl.fromTo(arrow.current, {
            y: -50,
            color: '#d0d0d5',
        }, {
            y: 0,
            color: '#3b3b4f',
            stagger: 0.1,
            duration: 0.5,
            ease: 'Linear.easeNone'
        }, 'cp-=0.3');
    });
    return (
        <div className="loader">
            <span ref={el => (arrow.current[0] = el)}>↓</span>
            <span ref={el => (arrow.current[1] = el)}>↓</span>
            <span ref={el => (arrow.current[2] = el)}>↓</span>
            <span ref={el => (arrow.current[3] = el)}>↓</span>
            <span ref={el => (arrow.current[4] = el)}>↓</span>
        </div>
    )
}

export default Loader;