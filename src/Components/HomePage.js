import React from "react";
import "./HomePage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { useState } from "react";

export function HomePage() {
  const images = [
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lori508m4xps01tnywxf",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v",
    },
  ];
  const addImages = [
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
    },
  ];
  const [imageList, setImageList] = useState([...images]);
  const [addingImages, setAddingImages] = useState([...addImages]);

  const forwardClick = () => {
    const one = [imageList[0]];
    imageList.splice(0, 1);
    imageList.push(addingImages[0]);
    const two = [...imageList];
    setImageList([...two]);
    setAddingImages(one);
  };
  const backwardClick = () => {
    const one = [imageList[3]];
    imageList.pop();
    imageList.unshift(addingImages[0]);
    const two = [...imageList];
    setImageList([...two]);
    setAddingImages(one);
  };
  return (
    <>
      <div class="container-fluid">
        <div className="body-container">
          <div className="btn">
            <button class="bBtn" onClick={backwardClick}>
              <ArrowBackIosIcon />
            </button>
          </div>
          <div className="images">
            {imageList.map((ele) => (
              <CardList ele={ele.src} />
            ))}
          </div>
          <div className="btn">
            <button class="fBtn" onClick={forwardClick}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function CardList({ ele }) {
  return (
    <div className="listImages">
      <Card sx={{ minWidth: 100, maxWidth: 350, justifyContent: "center" }}>
        <CardMedia
          className="imagOne"
          component="img"
          height="300"
          width="300"
          image={ele}
          alt="pizza.images"
        />
      </Card>
    </div>
  );
}