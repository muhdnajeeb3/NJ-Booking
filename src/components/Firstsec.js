import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Firstsec.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Firstsec({type}) {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <>
      <div className="firstsec">
        <div className={type==="list" ? "firstseccontainer listmode" : "firstseccontainer"}>
          <div className="firstseclist">
            <div className="firstlistitem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="firstlistitem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="firstlistitem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="firstlistitem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attraction</span>
            </div>
            <div className="firstlistitem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="firsttitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="firstdesc">
                Get rewarded for your travels unlock instants savings of 10% or
                more with account
              </p>
              <button className="firstsecbutton">Sign in / Register</button>
              <div className="firstsecsearch">
                <div className="headersearchitem">
                  <FontAwesomeIcon icon={faBed} className="headericon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headersearchinput"
                  />
                </div>
                <div className="headersearchitem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headericon"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headersearchtext"
                  >{`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "mm/dd/yyyy"
                  )}  `}</span>
                  {openDate && (
                    <DateRange
                      onChange={(item) => setDate([item.selection])}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      ranges={date}
                      direction="horizontal"
                      className="date"
                    />
                  )}
                  ;
                </div>
                <div className="headersearchitem">
                  <FontAwesomeIcon icon={faPerson} className="headericon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headersearchtext"
                  >
                    {`${options.adult} adult . ${options.children} children . ${options.room}  room`}
                  </span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionitem">
                        <span className="optiontext">Adult</span>
                        <div className="optioncounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optioncounterbutton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optioncounternumber">
                            {options.adult}
                          </span>
                          <button
                            className="optioncounterbutton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionitem">
                        <span className="optiontext">Children</span>
                        <div className="optioncounter">
                          <button
                            disabled={options.children <= 0}
                            className="optioncounterbutton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optioncounternumber">
                            {options.children}
                          </span>
                          <button
                            className="optioncounterbutton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionitem">
                        <span className="optiontext">Room</span>
                        <div className="optioncounter">
                          <button
                            disabled={options.room <= 1}
                            className="optioncounterbutton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optioncounternumber">
                            {options.room}
                          </span>
                          <button
                            className="optioncounterbutton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headersearchitem">
                  <button className="headerbtn">Search</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Firstsec;
