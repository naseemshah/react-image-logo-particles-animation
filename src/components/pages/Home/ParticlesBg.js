import React from 'react';
import Particles from 'react-particles-js';

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
                        color: {
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
        </div>
    );
}

export default ParticlesBg;