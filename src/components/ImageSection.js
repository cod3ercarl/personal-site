import React from "react";
import about from "../img/about-me.png";
import school from "../img/soc.png";
import hobby from "../img/hobby.png";
import { Link } from "react-router-dom";

function ImageSection({ aboutMe, soc, away }) {
  return (
    <>
      {aboutMe && (
        <div className="ImageSection">
          <div className="img">
            <img src={about} alt="" />
          </div>

          <div className="about-info">
            <h4>
              I'm<span> Carl</span>
            </h4>

            <div className="about-details">
              <div className="left-section">
                Before becoming a full time Web Developer I was working in the print industry for 15 years, over 12 years of that time was spent as a Print Production Manager. Technology was constantly changing through the years and it was my job to
                adapt to the changing needs of the business and industry as a whole while working with a team in a fast paced environment. I had to continuously evolve my working role over the years utilising new information, infrastructure,
                processes and legislation.
              </div>
            </div>
            <br />
            <Link className="btn" to="/carl-mcintosh-cv.pdf" target="_blank" download>
              Download CV
            </Link>
          </div>
        </div>
      )}
      {soc && (
        <div className="ImageSection">
          <div className="img">
            <img src={school} alt="" />
          </div>
          <div className="about-info">
            <h4>
              School of<span> Code</span>
            </h4>

            <div className="about-details">
              <div className="left-section">
                I was given a fantastic opportunity in the summer of 2020 to be apart of the 4th Cohort in the School of Code Bootcamp. This intensive course taught all the necessary skills to become a ready to work Javascript developer. While also
                teaching industry best practices. The course was fully remote and as well as teaching the fundamentals of JavaScript and introducing us to frameworks, such as React on the Front-End and Express on the backend, they taught us the soft
                skills necessary to become job ready and work within an Agile tech team. We worked every week in pairs, working with a different person each week, and culminated with a four week project solving a real tech problem and creating an app
                from start through to minimum viable product and minimum lovable product.
              </div>
            </div>
          </div>
        </div>
      )}
      {away && (
        <div className="ImageSection">
          <div className="img">
            <img src={hobby} alt="" />
          </div>
          <div className="about-info">
            <h4>
              <span>Away</span> from Web Development
            </h4>

            <div className="about-details">
              <div className="left-section">
                The global pandemic has meant my acivites away from code have become limited. I'm currently training to hopefully take part in a Tough Mudder run for 2021 so I try to run at least 3 times a week. I'm an avid wrestling fan (don't judge
                me please) so can be found watching this from time to time. I love to read, John Grisham being my favourite author. Other than that, you'll find me fishing, playing Fifa on the Playstation , listening to podcasts on Spotify or binging
                shows on Netflix or Disney Plus.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageSection;
