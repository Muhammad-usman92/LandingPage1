import React from "react";
function Footer() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 col-sm-12 col-md-6
"
          >
            <img src="" alt="icon" />
            <ul style={{ listStyle: "none" }}>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="container">
          <div className="col-lg-2 col-sm-12 col-md-6">
            <p style={{ fontWeight: "bold", lineHeight: "2" }}>Company</p>
              <p>About us</p>
              <p>Careers</p>
              <p>Legals</p>
              <p>Credit</p>
          </div>
          <div className="col-lg-2 col-sm-12 col-md-6">
            <p style={{ fontWeight: "bold", lineHeight: "2" }}>Product</p>
              <p>Proposals</p>
              <p>Contracts</p>
              <p>Time Tracking</p>
              <p>Task Management</p>
              <p>Invoicing</p>
              <p>Reporting</p>
          </div>
          <div className="col-lg-2 col-sm-12 col-md-6">
            <p style={{ fontWeight: "bold", lineHeight: "2" }}>Samples</p>
              <p>Accounting</p>
              <p>Construction</p>
              <p>Healthcare</p>
              <p>Legal</p>
              <p>Sales</p>
              <p>Technology</p>
          </div>
        </div>
        <div>
          <p>@2020 Oval</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;