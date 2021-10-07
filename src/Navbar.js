import React from "react";

export function Navbar() {
  return (<nav className="navbar navbar-expand-lg bg-dark">
    <button style={{ backgroundColor: "red" }} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand">tindog</a>
      <ul className="navbar-nav  ml-auto">
        <li style={{ color: "red", margin: "5px" }} className="nav-item">
          fullstack
        </li>
        <li style={{ color: "green", margin: "5px" }} className="nav-item">
          datasciences
        </li>
        <li style={{ color: "yellow", margin: "5px" }} className="nav-item">
          ml
        </li>
      </ul>
    </div>
  </nav>

  );
}
