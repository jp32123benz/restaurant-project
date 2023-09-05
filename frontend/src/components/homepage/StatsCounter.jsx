import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

const StatsCounter = () => {
    useCountUp({
        ref: 'counter',
        enableScrollSpy: true,
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
    });
    return (
        <>
            <section id="stats-counter" className="stats-counter">
                <div className="container" data-aos="zoom-out">

                    <div className="row gy-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                    className="clients purecounter">
                                    <CountUp
                                        start={0}
                                        end={253}
                                        duration={1}
                                        enableScrollSpy
                                    />
                                </span>
                                <p>Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                                    className="projects purecounter">
                                    <CountUp
                                        enableScrollSpy
                                        start={0}
                                        end={521}
                                        duration={1}
                                    />
                                </span>
                                <p>Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1"
                                    className="support purecounter">
                                    <CountUp
                                        enableScrollSpy
                                        start={0}
                                        end={1453}
                                        duration={1}
                                    />
                                </span>
                                <p>Hours Of Support</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                                    className="workers purecounter">
                                    <CountUp
                                        enableScrollSpy
                                        start={0}
                                        end={32}
                                        duration={1}
                                    />
                                </span>
                                <p>Workers</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default StatsCounter