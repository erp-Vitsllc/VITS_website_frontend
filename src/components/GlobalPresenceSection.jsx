import React from 'react';

const locations = [
    { name: 'UNITED STATES', color: '#ff2d55', top: '28%', left: '26%' },
    { name: 'REPUBLIC OF GUINEA', color: '#ff9500', top: '48%', left: '46%' },
    { name: 'SAUDI ARABIA', color: '#007aff', top: '38%', left: '57%' },
    { name: 'UNITED ARAB EMIRATES', color: '#af52de', top: '34%', left: '60%' },
    { name: 'INDIA', color: '#5ac8fa', top: '38%', left: '68%' },
];

const GlobalPresenceSection = () => {
    return (
        <section className="global-map-section">
            <div className="map-wrapper">
                <div className="dotted-map-container">
                    {/* Map Base - Using a high-quality dotted map overlay or SVG */}
                    <div className="map-base"></div>

                    {/* Map Pins */}
                    {locations.map((loc, index) => (
                        <div
                            key={index}
                            className="map-pin-point"
                            style={{ top: loc.top, left: loc.left }}
                        >
                            <div className="pin-teardrop" style={{ backgroundColor: loc.color }}>
                                <div className="pin-inner-circle"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legend / Timeline */}
                <div className="map-legend">
                    <div className="legend-line"></div>
                    <div className="legend-items">
                        {locations.map((loc, index) => (
                            <div key={index} className="legend-item">
                                <div className="legend-dot" style={{ backgroundColor: loc.color }}></div>
                                <span className="legend-text">{loc.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalPresenceSection;
