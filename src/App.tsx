import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BgPicture from "./assets/bg.webp";

import WithNavbar from "./components/WithNavbar";

function App() {

  const withNavbar = (children: React.ReactNode) => {
    return <WithNavbar>{children}</WithNavbar>;
  };

  return (
    <div className="relative min-h-screen flex items-center pointer-events-auto ">
      <header className="pt-0 pl-[4%] pb-[10px] md:hidden">
        <h1 className="pb-[15px] uppercase text-6xl text-gray-900 my-4 leading-[1]">Rocio & Dani</h1>
      </header>
      <picture className="max-w-full max-h-32 mb-5 w-full hidden md:block">
        <img loading="eager" alt="" src={BgPicture} className="w-full" />
      </picture>
      <header className="pt-0 pl-[4%] pb-[10px] hidden md:block">
        <h1 className="pb-[15px] uppercase text-6xl text-gray-900 my-4 leading-[1]">Rocio & Dani</h1>
        <div className="leading-[1] my-2 text-gray-900 text-xl font-normal uppercase">
          30 de Noviembre de 2024 • Madrid, España
        </div>
        <div className="block h-10 left-2 m-0 overflow-hidden fixed top-2 w-10 z-20">
          <button className="bg-transparent text-xs h-10 w-10 rounded-sm">
            <span className="css-azwsg4">
            </span><span className="css-1wkn33">Menu Button</span></button></div>
        <div className="css-2z2po7"><h2 className="css-1px5ucj">Preboda</h2></div>
        <nav role="navigation" className="css-1htxqsx"><div className="css-nfosgx"><ul className="css-kxffhl"><li className="css-1jqllu1"><a className="css-1xhaooh" href="/us/alberto-castano-and-alejandra-garcia-dec-2023"><span className="css-xjfj6f">Home</span></a></li><li className="css-1jqllu1"><a rel="nofollow" className="css-1xhaooh" href="/us/alberto-castano-and-alejandra-garcia-dec-2023/our-story"><span className="css-q1j27s">Preboda</span></a></li><li className="css-1jqllu1"><a rel="nofollow" className="css-1xhaooh" href="/us/alberto-castano-and-alejandra-garcia-dec-2023/photos"><span className="css-xjfj6f">Ceremonia</span></a></li><li className="css-1jqllu1"><a rel="nofollow" className="css-1xhaooh" href="/us/alberto-castano-and-alejandra-garcia-dec-2023/wedding-party"><span className="css-xjfj6f">Celebración</span></a></li><li className="css-1jqllu1"><a rel="nofollow" className="css-1xhaooh" href="/us/alberto-castano-and-alejandra-garcia-dec-2023/q-a"><span className="css-xjfj6f">Hoteles</span></a></li><li className="css-1jqllu1"><a rel="nofollow" className="css-1xhaooh" href="/us/alberto-castano-and-alejandra-garcia-dec-2023/trannsporte"><span className="css-xjfj6f">Trannsporte</span></a></li><li className="css-1jqllu1"><a rel="nofollow" className="css-1xhaooh" href="/us/alberto-castano-and-alejandra-garcia-dec-2023/travel"><span className="css-xjfj6f">Regalo</span></a></li></ul></div></nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
