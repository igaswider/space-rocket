import React from 'react';
import { format } from 'date-fns';
import Counter from './Counter';

const Data = props => {
  return (
    <article className="content">
            <div className="content__date">
              {format(new Date(), "DD MMMM YYYY")}
            </div>
            <div className="content__name">{props.nameRocket}</div>
            <Counter from={props.launch} to={props.today} />
            <div className="content__image">
              <img alt="" src={props.image} className="content__image" />
            </div>
            <div className="content__details">
              <h3 className="content__details--hStyle">details</h3>
              <p className="content__details--par">{props.details}</p>
            </div>
            <div className="content__details">
              <h3 className="content__details content__details--hStyle">
                rocket
              </h3>

                  <div className="content__details--border">
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        name:
                      </span>{" "}
                      <span className="content__details--pStyle">
                        {props.nameRocket}
                      </span>
                    </p>
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        company:
                      </span>{" "}
                      <span className="content__details--pStyle">
                        {props.company}
                      </span>
                    </p>
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        height:
                      </span>{" "}
                      <span className="content__details--pStyle">
                        {props.heightMeters}m / {props.heightFeet} ft
                      </span>
                    </p>
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        diameter:
                      </span>{" "}
                      <span className="content__details--pStyle">
                        {props.diameterMeters}m / {props.heightMeters} ft
                      </span>
                    </p>
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        mass:
                      </span>{" "}
                      <span className="content__details--pStyle">
                        {props.massKg} kg / {props.massLb} lb
                      </span>
                    </p>
                  </div>
                  <div className="content__details--border">
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        first flight:
                      </span>{" "}
                      <span className="content__details--pStyle">
                        {props.firstFlight}
                      </span>
                    </p>
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        country:
                      </span>{" "}
                      <span className="content__details--pStyle">
                        {props.country}
                      </span>
                    </p>
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        success rate:
                      </span>{" "}
                      <span className="content__details--pStyle">
                        {props.successRate} %
                      </span>
                    </p>
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        cost per launch:
                      </span>{" "}
                      <span className="content__details--pStyle">
                        ${props.costPerLaunch}
                      </span>
                    </p>
                  </div>
              <p className="content__details--par">{props.description}</p>
            </div>
            <div className="content__details">
              <h3 className="content__details content__details--hStyle">
                launch pad
              </h3>
                  <div className="content__details--border">
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        name:
                      </span>{" "}
                      <span className="content__details content__details--pStyle">
                        {props.fullName}
                      </span>
                    </p>
                  </div>
                  <div className="content__details--border">
                    <p>
                      <span className="content__details--pStyle content__details--phStyle">
                        location:
                      </span>{" "}
                      <span className="content__details content__details--pStyle">
                        {props.locationName} {props.locationRegion}
                      </span>
                    </p>
                  </div>
              <p className="content__details--par">{props.launchPadDetails}</p>
            </div>
    </article>
  );
};

export default Data;
