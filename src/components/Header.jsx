import React from "react";
import { Link } from "react-router-dom";
import search from "./search";

const Header = () => {
  return (
    <div>
      <div>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width={40}
                  height={32}
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlinkHref="#bootstrap" />
                </svg>
              </a>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/" className="nav-link px-2 text-white">
                    {" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="nav-link px-2 text-white">
                    {" "}
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/HotDeals" className="nav-link px-2 text-white">
                    {" "}
                    HotDeals
                  </Link>
                </li>
                <li>
                  <Link to="/FacQ" className="nav-link px-2 text-white">
                    {" "}
                    FacQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link px-2 text-white">
                    {" "}
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <div className="text-end">
               

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
