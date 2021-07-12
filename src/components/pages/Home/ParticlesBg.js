import React from 'react';
import Particles from 'react-particles-js';
import bgParticlesConfig from './particlesjs-config.json'

function ParticlesBg(props) {
    return (
        <div className="particles-container">
            <Particles 
                width="100vw"
                height="100vh"
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        },
                        "color": {
                            "value": "#ff0000"
                        }
                    },
                    
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 1
                      },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
            {/* <Particles 
                params={{
                    "fpsLimit": 60,
                    "particles": {
                        "collisions": {
                            "enable": false
                        },
                        "number": {
                            "value": 200,
                            "density": {
                                "enable": false,
                                "value_area": 100
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 30,
                            "opacity": 0.4
                        },
                        "move": {
                            "speed": 0.2,
                            "bounce": true
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "opacity_min": 0.05,
                                "speed": 1,
                                "sync": false
                            },
                            "value": 0.4
                        }
                    },
                    "polygon": {
                        "enable": true,
                        "scale": 0.5,
                        "type": "inline",
                        "move": {
                            "radius": 10
                        },
                        "url": "/test.svg",
                        "inline": {
                            "arrangement": "equidistant"
                        },
                        "draw": {
                            "enable": true,
                            "stroke": {
                                "color": "rgba(255, 255, 255, .2)"
                            }
                        }
                    },
                    "retina_detect": false,
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "repulse": {
                                "distance": 50,
                                "duration": 0.1,
                                "factor": 10,
                                "speed": 1,
                                "maxSpeed": 2,
                                "easing": "ease-out-quad"
                            },
                        }
                    }
                }}
            /> */}
        </div>
    );
}

export default ParticlesBg;