import React from "react";

const dimensions = {
  "data-iframe-width": "250",
  "data-iframe-height": "300",
};

const Certifications = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Certifications</h1>
        <p>The code behind embedded badges is controlled by the certification issuer and does not work consistently. If badges do not display properly, reload the page.</p>
      </div>
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-8 justify-center items-center sm:flex-row sm:justify-start mt-8">
        <div id="solutions-architect">
          <div 
            {...dimensions}
            data-share-badge-id="4acf7de6-b12e-4bda-ae42-7c524d073708" 
            data-share-badge-host="https://www.credly.com" 
          />
          <script 
            type="text/javascript" 
            async src="//cdn.credly.com/assets/utilities/embed.js" 
          />
        </div>
        <div id="terraform">
          <div 
            {...dimensions}
            data-share-badge-id="ac5b8711-c0aa-49b9-9d8e-0c9090860a28" 
            data-share-badge-host="https://www.credly.com"
          />
          <script 
            type="text/javascript" 
            async src="//cdn.credly.com/assets/utilities/embed.js"
          />
        </div>
      </div>
    </div>
  );
}

export default Certifications;
