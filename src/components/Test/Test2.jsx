import React, { useRef } from 'react'
import { QRCodeCanvas } from "qrcode.react"

function Test2() {
    const url = "https://anshsaini.com"

    const downloadQRCode = () => {
        const canvas = document.querySelector("#qrcode-canvas")
        if (!canvas) throw new Error("<canvas> not found in the DOM")
    
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
        const downloadLink = document.createElement("a")
        downloadLink.href = pngUrl
        downloadLink.download = "QR code.png"
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
      }
  return (
    <div className="p-3">
      <QRCodeCanvas id="qrcode-canvas" level="H" size={300} value={url} />
      <div className="my-5">
      <button onClick={downloadQRCode}>Download QR Code</button>
      </div>
    </div>
  )
}

export default Test2