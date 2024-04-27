import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BgPicture from "./assets/bg.webp";
import BgPictureMd from "./assets/bg_md.webp";

import Home from "./views/Home";
import Navbar from "./components/Navbar";

const routes = [
  {
    path: "/",
    name: "Home",
    title: "R&D",
  },
  {
    path: "/ceremony",
    name: "Ceremonia",
  },
  {
    path: "/celebration",
    name: "Celebración",
  },
  {
    path: "/hotels",
    name: "Hoteles",
  },
  {
    path: "/transport",
    name: "Transporte",
  },
  {
    path: "/gift",
    name: "Regalo",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  const getTitle = () => {
    const route = routes.find((route) => route.path === location.pathname);
    return route ? route.title || route.name : "R&D";
  };

  return (
    <div>
      <div
        className="bg-white bg-repeat bg-cover left-0 fixed right-0 z-[-1] bottom-[-120px] md:top-0"
        style={{ backgroundPositionX: "center", backgroundPositionY: "top" }}
      ></div>
      <div className="relative min-h-screen flex flex-col items-center pointer-events-auto ">
        <div className="h-14 w-full md:hidden"></div>
        <picture className="max-w-full max-h-[120px] mb-5 w-full block md:hidden">
          <source
            media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
            srcSet="https://media-api.xogrp.com/images/a4ed9eab-a6e9-4dda-887c-c8a0da96137e~rt_auto-rs_2560.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
            srcSet="https://media-api.xogrp.com/images/a4ed9eab-a6e9-4dda-887c-c8a0da96137e~rt_auto-rs_2048.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
            srcSet="https://media-api.xogrp.com/images/a4ed9eab-a6e9-4dda-887c-c8a0da96137e~rt_auto-rs_1536.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
            srcSet="https://media-api.xogrp.com/images/55265c51-94d8-4b42-8ba4-be84bfe91752~rt_auto-rs_960.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
            srcSet="https://media-api.xogrp.com/images/a4ed9eab-a6e9-4dda-887c-c8a0da96137e~rt_auto-rs_1920.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
            srcSet="https://media-api.xogrp.com/images/a4ed9eab-a6e9-4dda-887c-c8a0da96137e~rt_auto-rs_1536.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
            srcSet="https://media-api.xogrp.com/images/a4ed9eab-a6e9-4dda-887c-c8a0da96137e~rt_auto-rs_1152.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
            srcSet="https://media-api.xogrp.com/images/55265c51-94d8-4b42-8ba4-be84bfe91752~rt_auto-rs_720.h?ordering=explicit"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="https://media-api.xogrp.com/images/a4ed9eab-a6e9-4dda-887c-c8a0da96137e~rt_auto-rs_1280.h?ordering=explicit"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="https://media-api.xogrp.com/images/a4ed9eab-a6e9-4dda-887c-c8a0da96137e~rt_auto-rs_1024.h?ordering=explicit"
          />
          <source
            media="(min-width: 768px)"
            srcSet="https://media-api.xogrp.com/images/a4ed9eab-a6e9-4dda-887c-c8a0da96137e~rt_auto-rs_768.h?ordering=explicit"
          />
          <source srcSet="https://media-api.xogrp.com/images/55265c51-94d8-4b42-8ba4-be84bfe91752~rt_auto-rs_480.h?ordering=explicit" />
          <source srcSet="https://media-api.xogrp.com/images/55265c51-94d8-4b42-8ba4-be84bfe91752~rt_auto-rs_480.h?ordering=explicit" />
          <img alt="" src={BgPictureMd} className="h-full" />
        </picture>
        <header className="pt-0 px-[4%] pb-[10px] md:hidden">
          <h1 className="pb-2.5 uppercase text-6xl text-gray-900 my-4 leading-[1] pt-[140px] max-w-[600px] text-[43.5px] text-center">
            Rocio & Dani
          </h1>
          <div
            data-testid="header-wedding-date-location"
            className="leading-[1] my-2 mx-0 text-gray-900 text-[17px] uppercase"
          >
            30 de Novimebre de 2024 • Madrid
          </div>
        </header>
        <picture className="max-w-full max-h-32 mb-5 w-full hidden md:block">
          <img loading="eager" alt="" src={BgPicture} className="w-full" />
        </picture>
        <header className="pt-0 px-[4%] pb-[10px] hidden md:block">
          <h1 className="pb-[15px] pt-[280px] uppercase text-6xl text-gray-900 my-4 leading-[1]">
            Rocio & Dani
          </h1>
          <div className="leading-[1] my-2 text-gray-900 text-xl font-normal uppercase">
            30 de Noviembre de 2024 • Madrid
          </div>
        </header>
        <div
          className="block h-10 left-2 m-0 overflow-hidden fixed top-2 w-10 z-[19] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <button className="bg-none border-none text-[10px] h-10 w-10 rounded-[3px]">
            <span
              className="
           before:h-[3px] before:left-[20%] before:my-0 before:mx-auto before:rounded-[3px] before:mt-[-0.15em] before:absolute before:top-1/2 before:transition-all before:duration-500 before:w-6 before:bg-gray-900 before:shadow-xs
           after:h-[3px] after:left-[20%] after:my-0 after:mx-auto after:rounded-[3px] after:mt-[-0.15em] after:absolute after:top-1/2 after:transition-all after:duration-500 after:w-6 after:bg-gray-900 after:shadow-xs
         
          "
            ></span>
          </button>
        </div>
        <div className="h-14 left-0 fixed top-0 w-full z-[18] bg-white md:hidden">
          <h2 className="items-center flex h-14 justify-center w-full text-gray-900 text-3xl uppercase">
            {getTitle()}
          </h2>
        </div>
        <Navbar
          open={menuOpen}
          closeMenu={() => setMenuOpen(false)}
          routes={routes}
        />

        <Routes>
          <Route path="/" element={<Home routes={routes} />} />
        </Routes>
      </div>
      <footer className="items-center flex flex-col justify-end mt-auto relative w-full">
        <div className="leading-[1] my-[52px] mx-auto text-center w-fit mb-24">
          <div className="pt-0 px-[18px] pb-4 text-6xl font-normal">
            R&amp;D
          </div>
          <div className="pt-5 px-[18px] pb-0 text-gray-900 text-xl font-medium uppercase border-t border-t-gray-900">
            30 de Noviembre de 2024 • Madrid
          </div>
        </div>
        <picture className="w-full max-h-[120px] mt-[-29px]">
          <source
            media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
            srcSet="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_2560.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
            srcSet="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_2048.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
            srcSet="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_1536.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
            srcSet="https://media-api.xogrp.com/images/42afff7a-750e-410a-8bd3-ce2a5b45f1af~rt_auto-rs_960.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
            srcSet="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_1920.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
            srcSet="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_1536.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
            srcSet="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_1152.h?ordering=explicit"
          />
          <source
            media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
            srcSet="https://media-api.xogrp.com/images/42afff7a-750e-410a-8bd3-ce2a5b45f1af~rt_auto-rs_720.h?ordering=explicit"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_1280.h?ordering=explicit"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_1024.h?ordering=explicit"
          />
          <source
            media="(min-width: 768px)"
            srcSet="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_768.h?ordering=explicit"
          />
          <source srcSet="https://media-api.xogrp.com/images/42afff7a-750e-410a-8bd3-ce2a5b45f1af~rt_auto-rs_480.h?ordering=explicit" />
          <img
            loading="eager"
            alt=""
            src="https://media-api.xogrp.com/images/3bfeba5e-48c8-4e72-aa28-dfdb87f83ed0~rt_auto-rs_768.h?ordering=explicit"
            className="w-full"
          />
        </picture>
      </footer>
    </div>
  );
}

export default App;
