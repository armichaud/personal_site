"use client";

import { useState } from "react";

enum Project {
    HEX_MATH_TRAINER,
    CHICKEN_INTERPRETER,
    WEDDING_WEBSITE,
    RSVP_SERVERLESS
}


const Main = (): JSX.Element => {
    const [projectSelected, setProjectSelected] = useState<Project | null>(null);
    const selectProject = (project: Project) => {
        setProjectSelected(project == projectSelected ? null : project)
    };
    return (
    <div className="p-4">
        <div className="rounded-lg relative object-cover">
            <img 
                className="rounded-lg absolute top-5 right-0 sm:right-5 w-[25%] xl:w-[33%] xl:-top-[45%] xl:right-6 object-contain" 
                src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/43792e9f-d08c-4484-db62-c865f88f8400/public" 
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
                    <a href="/Michaud_CV_2025.pdf" target="_blank">&gt; résumé</a>
                </div>
            </div>
            <div className="mt-6">
                <p>projects</p>
                <div className="greenText">
                    <button onClick={() => selectProject(Project.HEX_MATH_TRAINER)}>&gt; hexadecimal math trainer</button>
                    {
                        projectSelected == Project.HEX_MATH_TRAINER && 
                        (   
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;<a href="/hex_trainer">app</a> | <a href="https://github.com/armichaud/hex_trainer">code</a>
                            </div>
                        )
                    }
                </div>
                <div className="greenText">
                    <button onClick={() => selectProject(Project.CHICKEN_INTERPRETER)}>&gt; chicken esolang interpreter</button>
                    {
                        projectSelected == Project.CHICKEN_INTERPRETER && 
                        (   
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://crates.io/crates/chicken_esolang">crate</a> | <a href="https://github.com/armichaud/chicken_esolang">code</a>
                            </div>
                        )
                    }
                </div>
                <div className="greenText">
                    <button onClick={() => selectProject(Project.WEDDING_WEBSITE)}>&gt; my wedding website</button>
                    {
                        projectSelected == Project.WEDDING_WEBSITE && 
                        (   
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;<a href="/wedding">app</a> | <a href="https://github.com/armichaud/wedding">code</a>
                            </div>
                        )
                    }
                </div>
                <div className="greenText">
                    <button onClick={() => selectProject(Project.RSVP_SERVERLESS)}>&gt; rsvp serverless lambda</button>
                    {
                        projectSelected == Project.RSVP_SERVERLESS && 
                        (   
                            <div>
                                &nbsp;&nbsp;&nbsp;<a href="https://github.com/armichaud/wedding-rsvp-serverless">code</a>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="mt-6">
                <p>certifications</p>
                <div><a href="https://www.credly.com/badges/4acf7de6-b12e-4bda-ae42-7c524d073708/public_url">&gt; aws associate solutions architect</a></div>
                <div><a href="https://www.credly.com/badges/ac5b8711-c0aa-49b9-9d8e-0c9090860a28/public_url">&gt; hashicorp terraform associate</a></div>
            </div>
        </div>
    </div>
)
};

export default Main;
