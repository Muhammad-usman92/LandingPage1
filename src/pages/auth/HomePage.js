import React from "react";
import CustomButton from "../../components/CustomButton";
import "./homepage.css";
import PngIcons from "../../images/PngIcon";

export default function HomePage() {
  return (
    <div>
      <div className="ml-50 mt-100">
        <CustomButton variant btnText />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h1 className="mt-30 main-heading">Flexible contracts to</h1>
        <h1 className="main-heading">secure your business</h1>

        <h6 className="mt-30 e-sign-text">
          Create & e-sign contracts from vetted templates.
          <br /> Get peace of lorem ipsum dolor sit amet work.
        </h6>

        <span>
          <input
            className="form-control-lg"
            type="text"
            placeholder="Enter your email"
          />

          <button type="button" className="btn btn-primary btn-lg mb-10">
            Start Free
          </button>
        </span>

        <div className="bottomText mt-10">
          *1 month free trial for all features access
        </div>
      </div>

      <div className="row justify-flex-end">
        <div className="col-sm-6 col-md-6">
          <img
            src={PngIcons.HeroImage}
            alt=""
            className="mt-200 hero-img"
          ></img>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h1 className="text">
            Make sure you’re being professional and <br />
            protected with customizable work contracts.
          </h1>
        </div>
      </div>

      <div className="row card-outer-box mr-0 ml-0 mt-64 pl-150 pr-150">
        <div className="col-sm-4">
          <div className="card ">
            <div className="imageSectionCard middle">
              <img src={PngIcons.Icon1} alt="" className="icon"></img>
            </div>
            <h2 className="text-center vetted p-2">Vetted Templates</h2>
            <h6 className="Structured-lorem setted">
              Use structured lorem ipsum dolor sit amet your own custom
              agreements and even standard.
            </h6>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card ">
            <div className="imageSectionCard middle">
              <img src={PngIcons.Icon2} alt="" className="icon"></img>
            </div>
            <h2 className=" text-center vetted p-2"> Electronic Signatures</h2>
            <h6 className="Structured-lorem setted">
              Send, sign lorem ipsum dolor sit amet and store your
              legally-bindings online contracts with your clients.
            </h6>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card ">
            <div className="imageSectionCard middle">
              <img src={PngIcons.Icon3} alt="" className="icon"></img>
            </div>
            <h2 className="text-center vetted p-2"> Auto-Reminders</h2>
            <h6 className="Strucutured-lorem setted">
              Auto-remind your lorem ipsum dolor sit amet for their signature
              and receive a notification when it is signed.
            </h6>
          </div>
        </div>

        <div className="row space-between">
          <div className="col-6 order-1">
            <img
              src={PngIcons.Design}
              alt=""
              className="design-img mt-50"
            ></img>
          </div>

          <div className="col-5">
            <h1 className="reminders-text">Protect Your Business</h1>
            <h6 className="mt-30 business">
              Vetted by thousands of freelancers and top contract lawyers,
              select from a variety of contract templates to get started. Then,
              add your own customizations for your business.
            </h6>
          </div>
        </div>

        <div className="row justify-flex-end">
          <div className="col-6 order-5 pl-150">
            <h1 className="mt-250 reminders-text">Automate Reminders</h1>
            <h6 className="mt-30 reminders-text2">
              Once sending your contract, stay up-to-date with automatic
              reminders to your client, as well as notifications for viewing and
              counter-signing.
            </h6>
          </div>

          <div className="col-6 mt-50">
            <img src={PngIcons.Group2} alt="" className="image image1 mt-100"></img>
          </div>
        </div>

        <div className="row mt-100 justify-flex-end space-between">
          <div className="col-12 col-md-6 col-sm-6">
            <h1 className="mt-100 stream-text-1">Streamline E-Signature</h1>
            <h6 className="mt-30 stream-text-2 pr-100">
              Use a legally-binding e-signature to speed up the formalities when
              onboarding a new client relationship. Send it via Oval or using
              your own secure link.
            </h6>
          </div>

          <div className="col-12 col-md-6 col-sm-6 order-1">
            <img src={PngIcons.Group} alt="" className="image image1"></img>
          </div>
        </div>

        <div className="row text-center justify-content-center w-100">
          <div className="mt-150 col-7 trusted-text-1 ml-55">
            <h1>Trusted by 300K+ freelancers and agencies worldwide</h1>
            <h6 className="mt-30 trusted-text-2">
              Whether you’re just getting started or your business is booming,
              Oval has you covered.
            </h6>
          </div>
        </div>

        <div className="row mt-64 justify-content-center">
          <div className="col-sm-4">
            <div className="card">
              <div className="imageSectionCard middle">
                <img src={PngIcons.Globe} alt="" className="icon1 mt-40"></img>
              </div>
              <h1 className="support-1">Global Support</h1>
              <h6 className="mt-30 support-2">
                Oval has international coverage across the United States,
                Canada, UK, Australia and more, with 180 currencies supported.
              </h6>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="imageSectionCard middle">
                <img src={PngIcons.Hand} alt="" className="icon1 mt-40"></img>
              </div>
              <h1 className="support-1">Built for All Trades</h1>
              <h6 className="mt-30 support-2">
                Oval has international coverage across the United States,
                Canada, UK, Australia and more, with 180 currencies supported.
              </h6>
            </div>
          </div>
        </div>

        <div className="mt-200">
          <h1 className="oval">Browse Oval's Contract Templates</h1>
        </div>

        <div className="row text-center mt-50 oval2 ml-0 mr-0 w-100 p-6">
          <div className="col-4">
            <div className="card2 p-5 bg-light">
              <h4>Mobile Design Contractor Template</h4>
            </div>
          </div>
          <div className="col-4">
            <div className="card2 p-5 bg-light">
              <h4>Non-Disclosure Agreement Template</h4>
            </div>
          </div>

          <div className="col-4">
            <div className="card2 p-5 bg-light">
              <h4 className="mt-15">Online Contract Maker</h4>
            </div>
          </div>
        </div>

        <div
          className="row ml-0 mr-0 position-relative imageBlue mt-200"
          style={{
            background: `url(${PngIcons.Blue})`,
            backgroundSize: "cover",
          }}
        >
          <div className="col-6 text-center text-white p-5 mt-15 col-sm-6 freelance">
            <h1 className="white">Manage your freelance work in easiest way</h1>
          </div>

          <div className="col-6 text-center p-lg-5 mt-50">
            <button type="button" className="btn btn-light btn-lg ml-150 button">
              Start Free
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-200 ml-200 ml-0 mr-0">
      <div className="col-5 social">
        <div className="mt-20">Twitter</div>
        <div className="mt-10">Facebook</div>
        <div className="mt-10">Instagram</div>
        <div className="mt-115">@2020 Oval</div>
      </div>
        <div className="col-2">
          <h5 className="end">Company</h5>
          <div className="mt-10 social">About us</div>
          <div className="mt-10 social">Careers</div>
          <div className="mt-10 social">Legals</div>
          <div className="mt-10 social">Credit</div>
        </div>

        <div className="col-2">
          <h5 className="end">Product</h5>
          <div className="mt-10 social">Proposals</div>
          <div className="mt-10 social">Contracts</div>
          <div className="mt-10 social">Time Tracking</div>
          <div className="mt-10 social">Task Management</div>
          <div className="mt-10 social">Invoicing</div>
          <div className="mt-10 social">Reporting</div>
        </div>

        <div className="col-2">
          <h5 className="end">Samples</h5>
          <div className="mt-10 social">Accounting</div>
          <div className="mt-10 social">Construction</div>
          <div className="mt-10 social">Healthcare</div>
          <div className="mt-10 social">Legal</div>
          <div className="mt-10 social">Sales</div>
          <div className="mt-10 social">Technology</div>
        </div>
      </div>
    </div>
  );
}
