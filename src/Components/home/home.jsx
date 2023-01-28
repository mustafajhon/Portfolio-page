import React, { Component } from "react";
import ProgressBar from "./progress";
import "./home.css";
import myProfile from "./images.png";
// import ProgressBar from "react-bootstrap/ProgressBar";

function Home() {
  let wi = 80;
  return (
    <div className="homePage">
      <div id="NameLabel" className="">
        <h1 id="YourName" className="text text-center">
          <span className="span">Mu</span>stafa <span className="span">Na</span>
          iby
        </h1>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div id="card">
              <h1>My Skills</h1>
              <hr />
              <br />
              <ProgressBar title="HTML" Progress="100" />
              <br />
              <ProgressBar title="CSS" Progress="90" />
              <br />
              <ProgressBar title="JavaScript" Progress="80" />
              <br />
              <ProgressBar title="Bootstrap" Progress="87" />
              <br />
              <ProgressBar title="JSX" Progress="90" />
              <br />
              <ProgressBar title="Python" Progress="60" />
            </div>
          </div>

          <div className="col-md-6">
            <div id="card2">
              <h1>Work Experiance</h1>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <p>
                    To be fear. I have not worked in any company or bussiness
                    yet. But I do have worked on some project Online and some
                    with friends.
                  </p>
                  <h3>Online Projects</h3>
                  <p>
                    <span>
                      You can click on Image to see all my online project in my
                      GitHub acount.
                    </span>
                  </p>
                  <h3>Friends Project</h3>
                  <p>
                    I and some of my friends recently completed a React
                    Portfulio project that you can see on my GitHub acount. I am
                    looking for new International friends to work on diffrent
                    projects.
                  </p>
                </div>

                <div className="col-md-6">
                  <div className="card">
                    <a href="https://github.com/mustafajhon">
                      <img id="img" src={myProfile} alt="jpg" />
                    </a>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
