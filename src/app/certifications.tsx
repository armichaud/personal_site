import React from "react";

const Certifications = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Certifications</h1>
        <p>The code behind embedded badges is controlled by the certification issuer and does not work consistently. If badges do not display properly, reload the page.</p>
      </div>
      <div className="mt-8">
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="4acf7de6-b12e-4bda-ae42-7c524d073708" 
          data-share-badge-host="https://www.credly.com" 
        />
        <script 
          type="text/javascript" 
          async src="//cdn.credly.com/assets/utilities/embed.js" 
        />
      </div>
    </div>
  );
}

export default Certifications;
