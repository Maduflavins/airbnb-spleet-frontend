import React, { Component } from "react";
import "../Accomndation/Accomndation.css";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";

export default class Accomndation extends Component {
  render() {
    return (
      <div className="person__all container-fluid pb-5">
        <hr className="hr-lg" />
        <div className="person">
          <div className="descraption">
            <img
              className="rounded-circle"
              src={this.props.creator.image}
              alt="reviewer-img"
            />
            <div className="name">
              <label>
                Hosted by{" "}
                {`${this.props.creator.firstName} ${this.props.creator.lastName}`}
              </label>
              <label>Joined in December 2013</label>
            </div>
          </div>
        </div>
        <div className="about row">
          <div className="review col-lg-6 col-lg-6 col-md-12">
            <div className=" row rate ">
              <div className="row ml-5">
                <StarOutlinedIcon style={{ color: "red" }} />
                <StarOutlinedIcon style={{ color: "red" }} />
                <StarOutlinedIcon style={{ color: "red" }} />
                <StarOutlinedIcon style={{ color: "red" }} />
                <StarOutlinedIcon style={{ color: "red" }} />
                <p className="ml-2">252 Reviews</p>
              </div>
            </div>
            <p className="ml-4 mt-3">
              I have worked in the hotel and tourism industry in Dahab since I
              graduated from university twenty years ago. I love Dahab and my
              job so much, and I've always believed in the quality of service.
              My job is just perfect for me, makes me meet a lot of people and
              make friends from all over the world, which I feel shapes my
              personality for the better and vice versa. I am well familiar with
              the area and its people. I also have great connections, access to
              tourists benefits, provide a safety net during your stay, and have
              had the transformative experiences that I will recommend for you.
              I'll help you discover the stories waiting to be told.
              <strong>During your stay</strong>
              Always available for the guests.
            </p>
          </div>
          <div className="info">
            <div className="lang">
              <label>Languages: ??????????????, English</label>
            </div>
            <div className="resp_rate">
              <label>Response rate: 100%</label>
            </div>
            <div className="res_time">
              <label>Response time: within an hour</label>
            </div>
            <button className="contact_btn">Contact</button>
          </div>
        </div>
      </div>
    );
  }
}
