import React from "react";
import CustomButton from "../../components/CustomButton";
import "./homepage.css";
import {TextField } from "@material-ui/core";
import PngIcons from "../../images/PngIcon";

export default function HomePage() {
  return (
    <div>
      <div className="ml-100 mt-100">
        <CustomButton variant btnText />
      </div>
      <h1 className="ml-100 mt-30">
        Flexible contracts to <br /> secure your business
      </h1>

      <h6 className="ml-100 mt-30 text-secondary">
        Create & e-sign contracts from vetted templates.
        <br /> Get peace of lorem ipsum dolor sit amet work.
      </h6>

      <label for="email" className="ml-100 mt-5]0"></label>

      <TextField
        id="outlined-basic"
        label="Enter your email"
        variant="outlined"
        className="mt-10"
      />

      <CustomButton className="mt-20" />

      <div className="ml-100 bottomText mt-10 text-secondary">
        *1 month free trial for all features access
      </div>

      <div class="row">
        <div class="col-sm">
          <img
            src={PngIcons.HeroImage}
            alt=""
            className="mt-200 hero-img"
          ></img>
        </div>
      </div>

      <div>
        <h1 className="text">
          Make sure you’re being professional and <br />
          protected with customizable work contracts.
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card bg-light">
              <h2 className="ml-40 mr-40">Vetted Templates</h2>
              <h6 className="mt-30 text-secondary ml-40 mr-40">
                Use structured lorem ipsum dolor sit amet your own custom
                agreements and even standard.
              </h6>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card bg-light">
              <h2 className="ml-20 mr-20"> Electronic Signatures</h2>
              <h6 className="mt-30 text-secondary ml-30 mr-30">
                Send, sign lorem ipsum dolor sit amet and store your
                legally-bindings online contracts with your clients.
              </h6>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card bg-light">
              <h2 className="ml-40 mr-40"> Auto-Reminders</h2>
              <h6 className="mt-30 text-secondary ml-40 mr-40">
                Auto-remind your lorem ipsum dolor sit amet for their signature
                and receive a notification when it is signed.
              </h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-">
            <img
              src={PngIcons.Design}
              alt=""
              className="design-img mt-50"
            ></img>
          </div>
          <div class="col-sm-4">
            <h1 className="mt-200">Protect Your Business</h1>
            <h6 className="mt-30 text-secondary">
              Vetted by thousands of freelancers and top contract lawyers,
              select from a variety of contract templates to get started. Then,
              add your own customizations for your business.
            </h6>
          </div>
        </div>

        <div className="row mt-100">
          <div className="col-6 order-5">
            <h1 className="mt-250 ml-90">Automate Reminders</h1>
            <h6 className="mt-30 ml-90 text-secondary">
              Once sending your contract, stay up-to-date with automatic
              reminders to your client, as well as notifications for viewing and
              counter-signing.
            </h6>
          </div>

          <div className="col-6 mt-50">
            <img src={PngIcons.Image} alt="" className="image mt-100"></img>
          </div>
        </div>

        <div className="row mt-100">
          <div className="col-6">
            <h1 className="mt-200">Streamline E-Signature</h1>
            <h6 className="mt-30 text-secondary">
              Use a legally-binding e-signature to speed up the formalities when
              onboarding a new client relationship. Send it via Oval or using
              your own secure link.
            </h6>
          </div>

          <div className="col-6 mt-50 order-1">
            <img
              src={PngIcons.Group}
              alt=""
              className="image mt-10 ml-100"
            ></img>
          </div>
        </div>

        <div className="row text-center justify-content-center mt-200">
          <div className="col-6">
            <h1>Trusted by 300K+ freelancers and agencies worldwide</h1>
            <h6 className="mt-30 text-secondary">
              Whether you’re just getting started or your business is booming,
              Oval has you covered.
            </h6>
          </div>
        </div>

        <div className="row text-center mt-50">
          <div className="col-6">
            <div className="card p-5">
              <h1>Global Support</h1>
              <h6 className="mt-30 text-secondary">
                Oval has international coverage across the United States,
                Canada, UK, Australia and more, with 180 currencies supported.
              </h6>
            </div>
          </div>

          <div className="col-6">
            <div className="card p-5 ml-30">
              <h1>Built for All Trades</h1>
              <h6 className="mt-30 text-secondary">
                Oval has international coverage across the United States,
                Canada, UK, Australia and more, with 180 currencies supported.
              </h6>
            </div>
          </div>
        </div>

        <div className="row mt-100 ml-10">
          <h1 className="ml-135">Browse Oval's Contract Templates</h1>
        </div>

        <div className="row text-center mt-50">
          <div className="col-4">
            <div className="card p-5 bg-light">
              <h4>Mobile Design Contractor Template</h4>
            </div>
          </div>
          <div className="col-4">
            <div className="card p-5 bg-light">
              <h4>Non-Disclosure Agreement Template</h4>
            </div>
          </div>

          <div className="col-4">
            <div className="card p-5 bg-light">
              <h4>Online Contract Maker</h4>
            </div>
          </div>
        </div>


        <div className="row position-relative imageBlue mt-80" style={{background : `url(${PngIcons.Blue})`, backgroundSize : 'cover'}}>
        
        <div className="col-6 text-center text-white p-5 mt-30">
          
        <h1 className="">Manage your freelance work in easiest way</h1>
        </div>


        <div className="col-6 text-center p-lg-5 mt-50"><button type="button" className="btn btn-light btn-lg">Start Free</button></div>
        </div>


        <div className="row mt-200">
          <div className="col-3">
            <div className="mt-20">Twitter</div>
            <div className="mt-20">Facebook</div>
            <div className="mt-20">Instagram</div>
            <div className="mt-100">@2020 Oval</div>
          </div>

          <div className="col-3">
            <h5>Company
            </h5>
            <div className="mt-20">About us</div>
            <div className="mt-20">Careers</div>
            <div className="mt-20">Legals</div>
            <div className="mt-20">Credit</div>
            </div>

            <div className="col-3">
              <h5>Product</h5>
              <div className="mt-20">Proposals</div>
              <div className="mt-20">Contracts</div>
              <div className="mt-20">Time Tracking</div>
              <div className="mt-20">Task Management</div>
              <div className="mt-20">Invoicing</div>
              <div className="mt-20">Reporting</div>
            </div>

            <div className="col-3">
              <div className="mt-20"><h5>Samples</h5></div>
              <div className="mt-20">Accounting</div>
              <div className="mt-20">Construction</div>
              <div className="mt-20">Healthcare</div>
              <div className="mt-20">Legal</div>
              <div className="mt-20">Sales</div>
              <div className="mt-20">Technology</div>

            </div>





        </div>
      
      </div>
    </div>
  );
}
