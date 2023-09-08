import { Link } from 'react-router-dom';

const RestaurantNavbar = () => {
    return (
        <>
            <div className="layout has-sidebar fixed-sidebar fixed-header">
                <aside id="sidebar" className="sidebar break-point-sm has-bg-image">
                    <Link id="btn-collapse" className="sidebar-collapser"><i className="ri-arrow-left-s-line"></i></Link>
                    {/* <div className="image-wrapper">
                        <img src="assets/images/sidebar-bg.jpg" alt="sidebar background" />
                    </div> */}
                    <div className="sidebar-layout">
                        <div className="sidebar-header">
                            <div className="pro-sidebar-logo">
                                <h5>Pro Sidebar</h5>
                            </div>
                        </div>
                        <div className="sidebar-content">
                            <nav className="menu open-current-submenu">
                                <ul>
                                    <li className="menu-header"><span> GENERAL </span></li>
                                    <li className="menu-item sub-menu">
                                        <Link href="#">
                                            <span className="menu-icon">
                                                <i className="ri-vip-diamond-fill"></i>
                                            </span>
                                            <span className="menu-title">Components</span>
                                            <span className="menu-suffix">
                                                <span className="badge primary">Hot</span>
                                            </span>
                                        </Link>
                                        <div className="sub-menu-list">
                                            <ul>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Grid</span>
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Layout</span>
                                                    </Link>
                                                </li>
                                                <li className="menu-item sub-menu">
                                                    <Link href="#">
                                                        <span className="menu-title">Forms</span>
                                                    </Link>
                                                    <div className="sub-menu-list">
                                                        <ul>
                                                            <li className="menu-item">
                                                                <Link href="#">
                                                                    <span className="menu-title">Input</span>
                                                                </Link>
                                                            </li>
                                                            <li className="menu-item">
                                                                <Link href="#">
                                                                    <span className="menu-title">Select</span>
                                                                </Link>
                                                            </li>
                                                            <li className="menu-item sub-menu">
                                                                <Link href="#">
                                                                    <span className="menu-title">More</span>
                                                                </Link>
                                                                <div className="sub-menu-list">
                                                                    <ul>
                                                                        <li className="menu-item">
                                                                            <Link href="#">
                                                                                <span className="menu-title">CheckBox</span>
                                                                            </Link>
                                                                        </li>
                                                                        <li className="menu-item">
                                                                            <Link href="#">
                                                                                <span className="menu-title">Radio</span>
                                                                            </Link>
                                                                        </li>
                                                                        <li className="menu-item sub-menu">
                                                                            <Link href="#">
                                                                                <span className="menu-title">Want more ?</span>
                                                                                <span className="menu-suffix">&#x1F914;</span>
                                                                            </Link>
                                                                            <div className="sub-menu-list">
                                                                                <ul>
                                                                                    <li className="menu-item">
                                                                                        <Link href="#">
                                                                                            <span className="menu-prefix">&#127881;</span>
                                                                                            <span className="menu-title">You made it </span>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-item sub-menu">
                                        <Link href="#">
                                            <span className="menu-icon">
                                                <i className="ri-bar-chart-2-fill"></i>
                                            </span>
                                            <span className="menu-title">Charts</span>
                                        </Link>
                                        <div className="sub-menu-list">
                                            <ul>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Pie chart</span>
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Line chart</span>
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Bar chart</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-item sub-menu">
                                        <Link href="#">
                                            <span className="menu-icon">
                                                <i className="ri-shopping-cart-fill"></i>
                                            </span>
                                            <span className="menu-title">E-commerce</span>
                                        </Link>
                                        <div className="sub-menu-list">
                                            <ul>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Products</span>
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Orders</span>
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">credit card</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-item sub-menu">
                                        <Link href="#">
                                            <span className="menu-icon">
                                                <i className="ri-global-fill"></i>
                                            </span>
                                            <span className="menu-title">Maps</span>
                                        </Link>
                                        <div className="sub-menu-list">
                                            <ul>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Google maps</span>
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Open street map</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-item sub-menu">
                                        <Link href="#">
                                            <span className="menu-icon">
                                                <i className="ri-paint-brush-fill"></i>
                                            </span>
                                            <span className="menu-title">Theme</span>
                                        </Link>
                                        <div className="sub-menu-list">
                                            <ul>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Dark</span>
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="#">
                                                        <span className="menu-title">Light</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-header" style={{ paddingTop: "20px" }}><span> EXTRA </span></li>
                                    <li className="menu-item">
                                        <Link href="#">
                                            <span className="menu-icon">
                                                <i className="ri-book-2-fill"></i>
                                            </span>
                                            <span className="menu-title">Documentation</span>
                                            <span className="menu-suffix">
                                                <span className="badge secondary">Beta</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="#">
                                            <span className="menu-icon">
                                                <i className="ri-calendar-fill"></i>
                                            </span>
                                            <span className="menu-title">Calendar</span>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="#">
                                            <span className="menu-icon">
                                                <i className="ri-service-fill"></i>
                                            </span>
                                            <span className="menu-title">Examples</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* <div className="sidebar-footer">
                            <div className="footer-box">
                                <div>
                                    <img
                                        className="react-logo"
                                        src="https://user-images.githubusercontent.com/25878302/213938106-ca8f0485-3f30-4861-9188-2920ed7ab284.png"
                                        alt="react"
                                    />
                                </div>
                                <div style={{ padding: "0 10px" }}>
                                    <span style={{ display: "block", marginBottom: "10px" }}
                                    >Pro sidebar is also available as a react package
                                    </span>
                                    <div style={{ marginBottom: "15px" }}>
                                        <img
                                            alt="preview badge"
                                            src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
                                        />
                                    </div>
                                    <div>
                                        <Link href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank"
                                        >Check it out!</Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </aside>
                {/* <div id="overlay" className="overlay"></div>
                <div className="layout">
                    <main className="content">
                        <div>
                            <Link id="btn-toggle" href="#" className="sidebar-toggler break-point-sm">
                                <i className="ri-menu-line ri-xl"></i>
                            </Link>
                            <h1 style={{ marginBottom: "0" }}>Pro Sidebar</h1>
                            <span style={{ display: "inline-block" }}>
                                Responsive layout with advanced sidebar menu built with SCSS and vanilla Javascript
                            </span>
                            <br />
                            <span>
                                Full Code and documentation available on
                                <Link href="https://github.com/azouaoui-med/pro-sidebar-template" target="_blank"
                                >Github</Link>
                            </span>
                            <div style={{ marginTop: "10px" }}>
                                <Link href="https://github.com/azouaoui-med/pro-sidebar-template" target="_blank">
                                    <img
                                        alt="GitHub stars"
                                        src="https://img.shields.io/github/stars/azouaoui-med/pro-sidebar-template?style=social"
                                    />
                                </Link>
                                <Link href="https://github.com/azouaoui-med/pro-sidebar-template" target="_blank">
                                    <img
                                        alt="GitHub forks"
                                        src="https://img.shields.io/github/forks/azouaoui-med/pro-sidebar-template?style=social"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h2>Features</h2>
                            <ul>
                                <li>Fully responsive</li>
                                <li>Collapsable sidebar</li>
                                <li>Multi level menu</li>
                                <li>RTL support</li>
                                <li>Customizable</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Resources</h2>
                            <ul>
                                <li>
                                    <Link target="_blank" href="https://github.com/azouaoui-med/css-pro-layout">
                                        Css Pro Layout</Link>
                                </li>
                                <li>
                                    <Link target="_blank" href="https://github.com/popperjs/popper-core">Popper Core</Link>
                                </li>
                                <li>
                                    <Link target="_blank" href="https://remixicon.com/"> Remix Icons</Link>
                                </li>
                            </ul>
                        </div>
                    </main>
                    <div className="overlay"></div>
                </div>*/}
            </div>
        </>
    )
}

export default RestaurantNavbar