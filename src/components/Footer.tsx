import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-bg-dark pt-4">
            <div className="container pb-5 content-space-b-sm-1">
                <div className="row justify-content-between align-items-center">
                    <div className="col-sm mb-3 mb-sm-0">
                        <p className="small text-white-70 mb-0">© {currentYear} Seun Owoyemi</p>
                    </div>

                    <div className="col-sm-auto">

                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a className="btn btn-soft-light btn-xs btn-icon" href="https://twitter.com/owoblow_junior">
                                    <i className="bi-twitter"></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn btn-soft-light btn-xs btn-icon" href="https://instagram.com/owoblow_junior">
                                    <i className="bi-instagram"></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer