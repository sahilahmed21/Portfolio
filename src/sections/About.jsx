import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' sahilahmedpbuh@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Sahil Ahmed</p>
              <p className="grid-subtext">
                Innovative and passionate Software Developer with a strong foundation in full-stack development and AI
                integration. Adept at solving complex problems, optimizing performance, and delivering seamless user
                experiences. Continuously exploring AI, cloud technologies, and cutting-edge tools to drive innovation and
                create impactful digital solutions. A quick learner and problem-solver with a keen eye for detail and a
                commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">

                I specialize in C++, Python, TypeScript, and JavaScript, along with frameworks and tools like Docker, Firebase, Next.js, React, Tailwind CSS, and Three.js to build robust and scalable applications. My expertise extends to databases (MongoDB, Supabase, SQL, PostgreSQL), RESTful APIs, Git, Google OAuth, and AI integration. I'm passionate about AI, machine learning, cloud technologies, and AI agents.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Gwalior,India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Gwalior, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container h-full">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full h-[200px] object-cover rounded-2xl"
            />
            <div className="p-6">
              <h2 className="grid-subtext text-center mb-4">Contact me</h2>
              <div className="space-y-4">
                <div
                  className="copy-container cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={handleCopy}
                >
                  <img
                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                    alt="copy"
                    className="w-6 h-6"
                  />
                  <p className="text-xl font-medium text-gray_gradient">
                    sahilahmedpbuh@gmail.com
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/in/sahilahmedkhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-container flex items-center gap-3 hover:opacity-90 transition-opacity"
                >
                  <img
                    src="assets/linkedin.svg"
                    alt="linkedin"
                    className="w-6 h-6"
                  />
                  <p className="text-xl font-medium text-gray_gradient">
                    Connect on LinkedIn
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
