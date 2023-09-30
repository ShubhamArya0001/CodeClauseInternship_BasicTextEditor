import React from 'react'
export default function NavBar(props) {
    let myStyle = {
        color: 'red',
    }
    return (
        <div>
            <nav className={`navbar  navbar-expand-lg  navbar-${props.mode} bg-${props.mode} text-${props.mode === 'dark' ? 'white' : 'black'}`} >
                <div className=" container-fluid" >
                    {/* <Link className="navbar-brand" to="/" style={myStyle}>Navbar</Link> */}
                    <a className="navbar-brand" href="/" style={myStyle}>Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/home" style={myStyle}>Home</Link> */}
                                <a className="nav-link active" aria-current="page" href="/" style={myStyle}>Home</a>
                            </li>
                            {/* <li className="nav-item">
                                 <Link className="nav-link" to="/about" style={myStyle}>About</Link> 
                                <a className="nav-link" href="/#" style={myStyle}>About</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" style={myStyle} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={myStyle}>
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch mx-3 text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">dark mode</label>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}
