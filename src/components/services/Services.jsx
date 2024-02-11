import React, { useState } from 'react';
import './services.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="services section" id="services">
        <h2 className="section__title">Career Goals</h2>
        <span className="section__subtitle">What I want to do 
        & Who I want to be</span>
    
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Software<br />Engineer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <h3 className="services__modal-title">Engineer</h3>
                        <p className="services__modal-description">
                        I aspire to be a software engineer who changes and discovers new worlds.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Be a team-friendly engineer
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                Be a respectable engineer
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Will complete more than one projects which change the world
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Data<br />Scientist</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <h3 className="services__modal-title">Scientist</h3>
                        <p className="services__modal-description">
                        I have a keen interest in emerging technologies, particularly Artificial Intelligence (AI), which has significantly transformed various aspects of our lives.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Create an Advanced AI for daily life
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                Adapting to new trends and discovering new technologies
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                Acquiring in-depth knowledge of machine learning and deep learning
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Statistical<br />Analyst</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <h3 className="services__modal-title">Analyst</h3>
                        <p className="services__modal-description">
                        Statistics are essential for characterizing the complexities of the world and its inhabitants. 
                        I aspire to conduct research across diverse data sets, aiming to derive results that have the potential 
                        to transform the world.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                Conduct analysis on data across multiple sectors 
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                Comprehend the dynamics of how the world operates
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                Perceive the world with both intuition and precision, avoiding a narrow perspective
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Services;