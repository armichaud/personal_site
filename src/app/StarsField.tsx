"use client"

import { useEffect, useRef, ReactNode } from 'react';
import * as THREE from 'three';

type StarsFieldProps = {
  children: ReactNode;
};

// Ensure that the stars field is larger than the screen to avoid exposing border on mobile
const DIMENSION_MULTIPLIER = 1.5;

const StarsField = ({ children }: StarsFieldProps) => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.outerWidth / window.outerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.outerWidth * DIMENSION_MULTIPLIER, window.outerHeight * DIMENSION_MULTIPLIER);
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
          mouse.x = (event.clientX / window.outerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.outerHeight) * 2 + 1;
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
            const newWidth = window.outerWidth;
            const newHeight = window.outerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth * DIMENSION_MULTIPLIER, newHeight * DIMENSION_MULTIPLIER);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('tabChanged', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('tabChanged', handleResize);
        };
    }
  }, []);

  return (
    <div className="relative w-screen h-screen" >
      <div className="fixed invisible dark:visible w-screen h-screen z-[-1]" ref={containerRef} />
      <div className="absolute top-0 left-0 w-screen h-screen z-10">
        {children}
      </div>
    </div>
  );
};

export default StarsField;
