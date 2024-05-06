import React from "react";
import QRCode from "../assets/RSVP.png";

export default function RSVP() {
  return (
    <div className="w-full py-4 px-0">
      <div className="md:p-0 my-[1.1em] mx-auto max-w-[550px] text-left font-cormorant tracking-wider text-gray-600 sm:text-base text-[calc(17px * 0.875)] px-4">
        <p className="text-justify">
          Haz click{" "}
          <a
            href="https://forms.gle/qX7AYfaGMLJSBhvo6"
            className="text-gray-500 underline"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            aquí
          </a>{" "}
          para confirmar tu asistencia
        </p>
        <p>
          <br />
        </p>
        <p className="text-justify mt-8">
          <img src={QRCode} alt="QR Code" className="mx-auto" />
        </p>
      </div>
    </div>
  );
}
