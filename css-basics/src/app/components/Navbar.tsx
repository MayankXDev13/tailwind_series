import React from "react";

function Navbar() {
  const links = [
    { title: "Guide", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Log in", href: "#" },
  ];
  return (
    <div className="navbar-root">
      <div className="logo">Finta</div>
      <div className="link">
        {links.map((link, idx) => (
          <a className="link-items" key={link.title} href={link.href}>
            {link.title}
          </a>
        ))}

        <button className="btn">Start free trail</button>
       
      </div>
    </div>
  );
}

export default Navbar;
