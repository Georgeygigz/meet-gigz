import React, { Component } from "react";
import "./Profile.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import NavBar from "../Navigation/index";

export class Profile extends Component {
  render() {
    return (
      <div className="profile-right-container">
        <HashRouter>
          <NavBar />
        </HashRouter>
        <div className="profile">
          <div className="profile-experience">
            <p className="experience">Past Experience</p>
            Buupass                                                                        March 2019 - Currently
Tasked with building a Restful Api for Integrating various Bus company API using Python-Django.
Optimizing the execution time.
Route Money Wallet                                                  November 2019 - Currently
Tasked with building the Restful Api for the money wallet using Python-Django, deploying the app on digital Ocean using CircleCI.
Consuming an Interswitch third Party Api to manage the wallets.
Deliver new features,  fix existing bugs and writing unittest.


Andela Kenya Limited			           	         December 2018 - October 2019
Worked as a product engineer tasked with working on internal products to deliver new features,  fix existing bugs and writing unittest.
I worked on building Restful API, primary using Python/flask/django
          </div>
        </div>
      </div>
    );
  }
}
