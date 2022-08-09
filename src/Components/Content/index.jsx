import React, { useState } from "react";
import { MassiveImage } from "../../Image/images";
import "./index.scss";

export const Content = () => {
  const {
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
  } = MassiveImage;

  const [content, setContent] = useState([
    { id: 1, name: "amarillis-pikoti", picture: image_1 },
    { id: 2, name: "amarillis-park-red", picture: image_2 },
    { id: 3, name: "amarillis-papillio", picture: image_3 },
    { id: 4, name: "amarillis-limon-laym", picture: image_4 },
    { id: 5, name: "amarillis-kristmas-gift", picture: image_5 },
    { id: 6, name: "amarillis-belladonna", picture: image_6 },
    { id: 7, name: "amarillis-afrodita", picture: image_7 },
    { id: 8, name: "amaryllis-lemon", picture: image_8 },
    { id: 9, name: "amarillis", picture: image_9 },
  ]);

  return (
    <div className="content">
      {content?.map((elem) => {
        return (
          <div className="content__container" key={elem.id}>
            <img
              className="content__elements"
              src={elem.picture}
              alt="Цветок"
            />
            <div className="content__name">{elem.name}</div>
          </div>
        );
      })}
      <div className="content__footer"></div>
    </div>
  );
};
