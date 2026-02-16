import React, { useState, useEffect, useRef } from 'react';
import { Flag, Handshake, Users, Lightbulb } from 'lucide-react';

const Counter = ({ end, duration = 2000, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        let start = 0;
        const endNum = parseInt(end);
        const stepTime = Math.max(duration / endNum, 10);

        const timer = setInterval(() => {
            start += Math.ceil(endNum / (duration / stepTime));
            if (start >= endNum) {
                setCount(endNum);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return <span>{count}+</span>;
};

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);
    const stats = [
        { icon: <Flag size={40} />, value: "5", label: "SERVING COUNTRIES" },
        { icon: <Handshake size={40} />, value: "6", label: "RELIABLE PARTNERS" },
        { icon: <Users size={40} />, value: "110", label: "CLIENTS SERVED" },
        { icon: <Lightbulb size={40} />, value: "480", label: "IDEAS EXECUTED" },
    ];

    return (
        <section ref={sectionRef} className="stats-section">
            <h2 className="stats-main-title">MARKET LEADER ACROSS VERTICALS</h2>
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-icon-wrapper">
                            {stat.icon}
                        </div>
                        <div className="stat-value">
                            <Counter end={stat.value} isVisible={isVisible} />
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
