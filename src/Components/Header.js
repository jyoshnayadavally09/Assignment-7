import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  // Get the logged-in user (if any)
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully.");
    navigate("/");
  };

  return (
    <header>
      {/* Top Header */}
      <div className="container-fluid bg-light py-2 border-bottom">
        <div className="row align-items-center">
          {/* Left: Logo + Search */}
          <div className="col-md-6 d-flex align-items-center">
            <img
              src="/logo.png"
              alt="BookMyClone Logo"
              className="me-3"
              style={{ height: 100, width: 100 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png";
              }}
            />
            <input
              type="text"
              className="form-control w-50"
              placeholder="Search for movies, events, plays..."
            />
          </div>

          {/* Right: Location + Buttons or Profile */}
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <select className="form-select w-auto me-3">
              <option>Hyderabad</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>

            {!loggedInUser ? (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Sign In
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle me-1"></i>
                  {loggedInUser.firstName}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/my-tickets">
                      My Bookings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="container-fluid bg-dark text-white py-2">
        <div className="row">
          {/* Left Links */}
          <div className="col-md-6 d-flex justify-content-start">
            <Link to="/movies" className="nav-link text-white px-2">
              Movies
            </Link>
            <Link to="/events" className="nav-link text-white px-2">
              Events
            </Link>
            <Link to="/plays" className="nav-link text-white px-2">
              Plays
            </Link>
            <Link to="/sports" className="nav-link text-white px-2">
              Sports
            </Link>
            <Link to="/streams" className="nav-link text-white px-2">
              Activities
            </Link>
          </div>

          {/* Right Links */}
          <div className="col-md-6 d-flex justify-content-end">
            <Link to="/buzz" className="nav-link text-white px-2">
              Buzz
            </Link>
            <Link to="/offers" className="nav-link text-white px-2">
              Offers
            </Link>
            <Link to="/gifts" className="nav-link text-white px-2">
              Gift Cards
            </Link>
            <Link to="/help" className="nav-link text-white px-2">
              Help
            </Link>
            {loggedInUser && (
              <Link to="/profile" className="nav-link text-white px-2">
                Profile
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
