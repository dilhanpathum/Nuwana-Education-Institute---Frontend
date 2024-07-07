import React, { useState } from "react";
import WebcamCapture from "./WebcamCapture";
import jsQR from "jsqr";
import { useLocation, useNavigate } from "react-router-dom";
import APIService from "../Api/APIService";
import { useCookies } from "react-cookie";
const QRScanner = () => {
  const [qrCode, setQrCode] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const handleScan = (imageSrc) => {
    if (imageSrc) {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });
        if (code) {
          setQrCode(code);
          
          APIService.GetUserDetails(token["mytoken"], { email: code.data })
            .then((resp) => {
              console.log(resp);
              setId(resp.id);
              navigate(`/attendence/${resp.id}`);
            })
            .catch((error) => removeToken(["mytoken"]));
          
          console.log("code: ", code.data);
        }
      };
    }
  };

  return (
    <div>
      <WebcamCapture onScan={handleScan} />
    </div>
  );
};

export default QRScanner;
