import { useState, useEffect } from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";


export default function Home()
{
    
    return (
        
        <>
        <HomeSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
        </>
    )
}