import React from 'react';
import Particles from 'react-particles-js';
import bgParticlesConfig from './particlesjs-config.json'

function ParticlesBg(props) {
    return (
        <div className="particles-container">
            <Particles 
                width="100vw"
                height="100vh"
                params={bgParticlesConfig}
            />
        </div>
    );
}

export default ParticlesBg;