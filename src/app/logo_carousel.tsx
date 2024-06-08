import React, { useState, useEffect, useRef } from 'react';

const companies = [
    {
      name: "Capital One",
      logo: <img className="max-h-24 w-24 scale-[90%]" src="https://tbcdn.talentbrew.com/company/234/gst_v1_0/img/logo-capital-one.svg" alt="c1"/>,
      website: "https://www.capitalone.com",
    },
    {
      name: "Drizly",
      logo: <img className="max-h-24" src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/7698f546-d965-4a5d-e766-2200beb85100/public" alt="drizly"/>,
      website: "https://www.drizly.com",
    },
    {
      name: "ProdPerfect",
      logo: <img className="max-h-24 scale-75" src="https://prodperfect.com/wp-content/themes/prodperfect/favicon.png" alt='p2'/>,
      website: "https://prodperfect.com",
    },
    {
      name: "Wayfair",
      logo: <img className="max-h-24" src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/6855f684-027c-4252-5bbc-b4b711a1fd00/public" alt="wayfair"/>,
      website: "https://www.wayfair.com",
    },
  ];

const LogoCarousel = () => {
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef(null);
  
    const allCompanies = [...companies, ...companies];
  
    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            if (!isPaused && carouselRef.current) {
                let current = (carouselRef.current as HTMLDivElement);
                if (animationFrameId % 4 === 0) current.scrollLeft += 1;
                if (current.scrollLeft >= current.scrollWidth / 2) {
                    current.scrollLeft = 0;
                }
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animate();
  
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPaused]);
  
    const handleMouseEnter = () => setIsPaused(true);
    const handleLeaveUpEndCancel = () => setIsPaused(false);
  
    return (
        <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-hidden relative w-[75%] sm:w-full md:w-[75%] lg:w-[60%] xl:w-[50%]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleLeaveUpEndCancel}
            onMouseUp={handleLeaveUpEndCancel}
            onMouseOut={handleLeaveUpEndCancel}
            onTouchCancel={handleLeaveUpEndCancel}
            onTouchEnd={handleLeaveUpEndCancel}
        >
            <div
                className="flex transition-transform items-center"
                style={{ width: `${allCompanies.length * 100}%` }}
            >
                {allCompanies.map((company, index) => (
                    <a
                        key={index}
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity flex-shrink-0"
                    >
                        {company.logo}
                    </a>
                ))}
            </div>
        </div>
    );
  }
  
  export default LogoCarousel;