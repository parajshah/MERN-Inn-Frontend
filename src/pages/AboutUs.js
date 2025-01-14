import React from 'react';
import CarouselAbout from '../components/CarouselAbout';
import { Grid } from '@mui/material'
import Inland from '../components/Inland';


let mongoLogo = "https://www.cloudsavvyit.com/p/uploads/2021/07/f5932bc2.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1";
let mongoDescription = "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.";

let expressLogo = "https://res.cloudinary.com/practicaldev/image/fetch/s--GEOe8aLy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/qgjn9fi1vff7thgbbecs.jpeg";
let expressDescription = "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.";

let reactLogo = "https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png";
let reactDescription = "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.";

let nodeLogo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a02af52b-2b04-4534-ad4e-f98688ceb85e/db4e1ip-ce5b9423-400d-4442-8dd8-a9f42717c6c9.png";
let nodeDescription = "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.";


function AboutUs() {
  return (
    <>
      <div className='home w-100'>
        <CarouselAbout></CarouselAbout>
      </div>
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <h2 className='mb-3'><strong>What is <span id="m" className='m-1'>M</span>
          <span id="e" className='m-1'>E</span>
          <span id="r" className='m-1'>R</span>
          <span id="n" className='m-1'>N</span> Inn?</strong></h2>
        <p>MERN Inn is a state of the art, hotel room booking faciltiy, It is a Full Stack Web Development mini projetc. It requires users to sign up/in to continue to booking page, where they can check their previous bookings or book a new room. There is a feature to download the invoice any previous booking as a PDF. The Source code is available on GitHub and can be accessed from the link in the navbar.</p>
        <h2><strong>Tech Stack Used:</strong></h2>
        <Grid className='mt-3' container spacing={1}>
          <Grid className='mt-4' item md={3} sm={12} xs={12}>
            <Inland title="MongoDB" description={mongoDescription} image={mongoLogo}></Inland>
          </Grid>
          <Grid className='mt-4' item md={3} sm={12} xs={12}>
            <Inland title="Express" description={expressDescription} image={expressLogo}></Inland>
          </Grid>
          <Grid className='mt-4' item md={3} sm={12} xs={12}>
            <Inland title="React" description={reactDescription} image={reactLogo}></Inland>
          </Grid>
          <Grid className='mt-4' item md={3} sm={12} xs={12}>
            <Inland title="NodeJS" description={nodeDescription} image={nodeLogo}></Inland>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default AboutUs;
