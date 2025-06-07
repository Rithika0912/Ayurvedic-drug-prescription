import React from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import data from "./components/Data.json";
import "./Description.css";

import { ListGroup, Stack, Card, Image, Row, Col } from "react-bootstrap";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBContainer,
} from "mdb-react-ui-kit";

const Description = () => {
  const location = useLocation();
  const lData = data;
  const { selectedDisease } = location.state || {};
  const medUrl = {
    Ashwagandha:
      "https://t3.ftcdn.net/jpg/04/59/50/76/240_F_459507607_BL8ZiOkF1BRmXsOZ3VkcFVcZu2qNV44G.jpg",
    Trikatu:
      "https://www.drshikhasharma.com/wp-content/uploads/2019/03/trikatu-1.jpg",
    Guggul:
      "https://t3.ftcdn.net/jpg/02/75/11/62/360_F_275116201_DkxS0pqlNeLrn61rmCpHLDfrPREsz6h3.jpg",
    Turmeric:
      "https://t3.ftcdn.net/jpg/01/82/27/42/360_F_182274289_RvpPTYZmC3n98ZXuH85d31XBfyEhk6b1.jpg",
    Tulsi:
      "https://media.istockphoto.com/id/1282865548/photo/holy-basil-or-tulsi-plants-inside-the-home-garden.webp?b=1&s=170667a&w=0&k=20&c=FCgTsZfrp4bByfrRLrbY7LrhUNWvOkqTP7dqqWGB_n8=",
  };

  return (
    <div>
      <Navbar />
      <div className="description-box">
        <h2>Description</h2>
        <MDBRow>
          {lData
            .filter((Data) => Data.DISEASE === selectedDisease)
            .map((filteredData, index) => (
              <MDBCol md="4" className="mb-4 mb-lg-0">
                <MDBCard className="text-black">
                  <MDBCardBody>
                    <MDBCardImage                  
                      src={medUrl[filteredData.DRUG.split(",")[index].trim()]}
                      position="top"
                      alt={filteredData.DRUG.split(",")[index].trim()}
                    />
                    <MDBCardTitle className="h4">
                      {filteredData.DRUG.split(",")[index].trim()}
                    </MDBCardTitle>
                    <p>{filteredData.DESCRIPTION.split("\n\n")[index + 1]}</p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
        </MDBRow>
      </div>
    </div>
  );
};

export default Description;
