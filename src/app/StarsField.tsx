"use client"

import { useEffect, useRef, ReactNode } from 'react';
import * as THREE from 'three';

type StarsFieldProps = {
  children: ReactNode;
};

const StarsField = ({ children }: StarsFieldProps) => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef?.current?.appendChild(renderer.domElement);

        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 });

        const starsVertices = [];
        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starsVertices.push(x, y, z);
        }

        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);
        
        const mouse = new THREE.Vector2();
        document.addEventListener('mousemove', (event) => {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        window.addEventListener('deviceorientation', (event: DeviceOrientationEvent) => {
          if (event.beta !== null && event.gamma !== null) {
            mouse.x = -(event.gamma / 90) * 2 + 1;
            mouse.y = (event.beta / 180) * 2 - 1;
          }
        });

        const animate = () => {
            requestAnimationFrame(animate);
            const target = new THREE.Vector3(mouse.x * 100, mouse.y * 100, 0);
            camera.position.lerp(target, 0.05);
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('tabChanged', handleResize);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return (
    <div className="relative w-full h-full" >
      <div className="fixed invisible dark:visible w-full h-full z-[-1]" style={{ WebkitBackfaceVisibility: 'hidden' }} ref={containerRef} />
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {children}
      </div>
    </div>
  );
};

export default StarsField;
