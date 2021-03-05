import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player, ControlBar, PlayToggle } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <Player
                //autoPlay
                poster={item.image}
                src={item.video}
              >
                <ControlBar autoHide={false} disableDefaultControls={false}>
                  <PlayToggle />
                </ControlBar>
              </Player>
              <ul className="hover-items">
                <li>
                  <a href={item.link1} target="_blank" rel="noreferrer">
                    {item.icon1}
                  </a>

                  <a href={item.link2} target="_blank" rel="noreferrer">
                    {item.icon2}
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>

            <Accordion className="accordion" allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <p style={{ cursor: "pointer" }}>
                      Project Details{" "}
                      <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <br />
                  <h4>Responsiveness: {item.details.responsiveness}</h4>
                  <br />
                  <p>{item.details.text}</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
