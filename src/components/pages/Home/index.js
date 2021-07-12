import React from 'react';
import ParticlesLogo from './ParticleLogo';
import ParticlesBg from './ParticlesBg'

function HomePage(props) {
    return (
        <div className="hero-section">
            <ParticlesBg />
            <ParticlesLogo />
        </div>
    );
}

export default HomePage;