import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

const Aside = ({ asideHide }) => {

    return (
        <>
            <aside id="sidebar" className={`sidebar ${asideHide ? 'nonedisplay' : null}`}>

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <Link className="nav-link " href="index.html">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle"></i><span>Alerts</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-accordion.html">
                                    <i className="bi bi-circle"></i><span>Accordion</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-badges.html">
                                    <i className="bi bi-circle"></i><span>Badges</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-breadcrumbs.html">
                                    <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-buttons.html">
                                    <i className="bi bi-circle"></i><span>Buttons</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-cards.html">
                                    <i className="bi bi-circle"></i><span>Cards</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-carousel.html">
                                    <i className="bi bi-circle"></i><span>Carousel</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-list-group.html">
                                    <i className="bi bi-circle"></i><span>List group</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-modal.html">
                                    <i className="bi bi-circle"></i><span>Modal</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-tabs.html">
                                    <i className="bi bi-circle"></i><span>Tabs</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-pagination.html">
                                    <i className="bi bi-circle"></i><span>Pagination</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-progress.html">
                                    <i className="bi bi-circle"></i><span>Progress</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-spinners.html">
                                    <i className="bi bi-circle"></i><span>Spinners</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-tooltips.html">
                                    <i className="bi bi-circle"></i><span>Tooltips</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="forms-elements.html">
                                    <i className="bi bi-circle"></i><span>Form Elements</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="forms-layouts.html">
                                    <i className="bi bi-circle"></i><span>Form Layouts</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="forms-editors.html">
                                    <i className="bi bi-circle"></i><span>Form Editors</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="forms-validation.html">
                                    <i className="bi bi-circle"></i><span>Form Validation</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="tables-general.html">
                                    <i className="bi bi-circle"></i><span>General Tables</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="tables-data.html">
                                    <i className="bi bi-circle"></i><span>Data Tables</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="charts-chartjs.html">
                                    <i className="bi bi-circle"></i><span>Chart.js</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="charts-apexcharts.html">
                                    <i className="bi bi-circle"></i><span>ApexCharts</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="charts-echarts.html">
                                    <i className="bi bi-circle"></i><span>ECharts</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="icons-bootstrap.html">
                                    <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="icons-remix.html">
                                    <i className="bi bi-circle"></i><span>Remix Icons</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="icons-boxicons.html">
                                    <i className="bi bi-circle"></i><span>Boxicons</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-heading">Pages</li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="users-profile.html">
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-faq.html">
                            <i className="bi bi-question-circle"></i>
                            <span>F.A.Q</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-contact.html">
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-register.html">
                            <i className="bi bi-card-list"></i>
                            <span>Register</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-login.html">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>Login</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-error-404.html">
                            <i className="bi bi-dash-circle"></i>
                            <span>Error 404</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="pages-blank.html">
                            <i className="bi bi-file-earmark"></i>
                            <span>Blank</span>
                        </Link>
                    </li>

                </ul>

            </aside>
        </>
    )
}

export default Aside