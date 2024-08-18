import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">School Year</h3>
            <span className="about__subtitle">2A</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">Variable Projects</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Personality</h3>
            <span className="about__subtitle">Passionate and Optimistic</span>
        </div>
    </div>
  );
}

export default Info;