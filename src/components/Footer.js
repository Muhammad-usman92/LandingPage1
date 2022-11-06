import React from "react";
function Footer() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 col-sm-6 col-md-6
"
            style={{ listStyle: "none" }}
          >
            <img src="" alt="icon" />

            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </div>
{/* i wnat to add commint */}

          <div
            className="col-lg-2 col-sm-6 col-md-6"
            style={{ listStyle: "none" }}
          >
            <li style={{ fontWeight: "bold", lineHeight: "2" }}>Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Legals</li>
            <li>Credit</li>
          </div>
          <div
            className="col-lg-2 col-sm-6 col-md-6"
            style={{ listStyle: "none" }}
          >
            <li style={{ fontWeight: "bold", lineHeight: "2" }}>Product</li>
            <li>Proposals</li>
            <li>Contracts</li>
            <li>Time Tracking</li>
            <li>Task Management</li>
            <li>Invoicing</li>
            <li>Reporting</li>
          </div>
          <div
            className="col-lg-2 col-sm-6 col-md-6"
            style={{ listStyle: "none" }}
          >
            <li style={{ fontWeight: "bold", lineHeight: "2" }}>Samples</li>
            <li>Accounting</li>
            <li>Construction</li>
            <li>Healthcare</li>
            <li>Legal</li>
            <li>Sales</li>
            <li>Technology</li>
          </div>
        </div>
        <div>
          <p>@2020 Oval</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;