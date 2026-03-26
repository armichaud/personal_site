const Main = (): JSX.Element => (
    <div className="p-4 xl:p-12">
        <div className="rounded-lg relative object-cover">
            <img 
                className="rounded-lg absolute top-6 right-0 sm:right-5 w-[25%] xl:w-[33%] xl:-top-[45%] xl:right-12 xl:top-6 object-contain" 
                src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/ccbbd565-53b4-4780-7fee-b4bcef64c100/public" 
                alt="profile_pic"
            /> 
        </div>
        <div className='flex p-4 flex-col'>
            <p className="text-3xl sm:text-4xl lg:text-5xl mb-1 w-3/4">alexander rodion michaud</p>
            <p className='sm:text-2xl mb-1'>senior software engineer</p>
            <p className="mb-2">washington, dc</p>
            <div className="mt-6">
                <p>links</p>
                <div>
                    <a href="mailto:email@alexandermichaud.tech">&gt; email</a>
                </div>
                <div>
                    <a href="https://github.com/armichaud">&gt; github</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/alexander-michaud-2a120388/">&gt; linkedin</a>
                </div>
                <div>
                    <a href="https://medium.com/@alexander.michaud">&gt; medium</a>
                </div>
                <div>
                    <a href="/Michaud_CV_2026.pdf" target="_blank">&gt; résumé</a>
                </div>
            </div>
            <div className="mt-6">
                <p>certifications</p>
                <div><a href="https://www.credly.com/badges/4acf7de6-b12e-4bda-ae42-7c524d073708/public_url">&gt; aws associate solutions architect</a></div>
                <div><a href="https://www.credly.com/badges/ac5b8711-c0aa-49b9-9d8e-0c9090860a28/public_url">&gt; hashicorp terraform associate</a></div>
            </div>
        </div>
    </div>
);

export default Main;
