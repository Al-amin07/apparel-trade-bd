"use client"
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function AnimationProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <div>
            {children}
        </div>
    )
}
