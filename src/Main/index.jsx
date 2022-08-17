/*
    A single-page designed web interface for displaying an in-character item catalogue for a friend using React and React Spring.
    Copyright (C) 2022  Kalka

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import React, { useEffect, useState, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleDroplet, faPaw } from "@fortawesome/free-solid-svg-icons";
import { faBattleNet } from "@fortawesome/free-brands-svg-icons";
import { useSpring, animated as a } from "react-spring";

const CatalogueComponent = React.lazy(() => import("./Catalogue"));

const Main = () => {
  const [loaded, setLoaded] = useState(false);
  const [page, setPageReact] = useState(0);
  const [finishLoaded, setFinishLoaded] = useState(false);

  const [titleSpring, titleSpringApi] = useSpring(() => ({
    config: {
      friction: 10,
    },
    from: {
      scale: 1,
      opacity: 0,
    },
  }));

  const [loadSpring, loadSpringApi] = useSpring(() => ({
    config: {
      friction: 10,
      clamp: true,
    },
    from: {
      scale: 1,
      opacity: 1,
    },
  }));

  const [navPositionSpring, navPositionSpringApi] = useSpring(() => ({
    config: {
      friction: 10,
    },
    from: {
      x: 200,
      opacity: 0,
    },
  }));

  const [contentSpring, contentSpringApi] = useSpring(() => ({
    config: {
      friction: 10,
    },
    from: {
      x: 0,
      opacity: 0,
      scale: 0.8,
    },
  }));

  const [backgroundSpring, backgroundSpringApi] = useSpring(() => ({
    config: {
      friction: 15,
    },
    from: {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0.5,
    },
  }));

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    const handleResize = async () => {
      const width = window.innerWidth;
      setWindowSize({
        width: width,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    loadSpringApi.start({ opacity: 0 });

    contentSpringApi.start({ opacity: 1, scale: 1 });
    titleSpringApi.start({ opacity: 1, scale: 1 });
    navPositionSpringApi.start({ opacity: 1 });
    backgroundSpringApi.start({ opacity: 1, scale: 1 });

    setTimeout(() => {
      setFinishLoaded(true);
    }, 1000);
  }, [loaded]);

  useEffect(() => {
    if (windowSize.width > 800) {
      navPositionSpringApi.start({ x: 400 });
    } else {
      navPositionSpringApi.start({ x: 100 });
    }
  }, [windowSize]);

  const setPage = (page) => {
    contentSpringApi.start({
      x: -100,
      opacity: 0,
      config: { clamp: true },
      onRest: () => {
        setPageReact(page);
        contentSpringApi.set({ x: 300 });
        contentSpringApi.start({ x: 0, opacity: 1, config: { clamp: false } });
      },
    });
  };

  const handleMouse = (e) => {
    switch (e.type) {
      case "mouseenter":
        backgroundSpringApi.start({
          scale: 1.1,
          config: { friction: 10 },
        });
        break;
      case "mouseleave":
        backgroundSpringApi.start({
          scale: 1,
          x: 0,
          y: 0,
          config: { friction: 20 },
        });
        break;
      case "mousemove":
        backgroundSpringApi.start({
          x: -e.clientX * 0.05,
          y: -e.clientY * 0.05,
        });
      default:
        break;
    }
  };

  return (
    <>
      <div
        className="w-full h-full"
        onMouseEnter={(e) => handleMouse(e)}
        onMouseLeave={(e) => handleMouse(e)}
        onMouseMove={(e) => handleMouse(e)}
      >
        {!finishLoaded && (
          <a.div
            style={loadSpring}
            className={`w-full h-full ${
              !loaded && "bg-black"
            } fixed z-[9999] transition-all`}
          ></a.div>
        )}
        <div className="fixed w-full h-32 backdrop-blur-lg z-10"></div>
        <div className="absolute m-8 w-full text-zinc-300">
          <a.div
            style={titleSpring}
            onMouseEnter={() => titleSpringApi.start({ scale: 1.1 })}
            onMouseLeave={() => titleSpringApi.start({ scale: 1 })}
            className="border-4 p-4 backdrop-blur-lg fixed rounded-3xl text-4xl hover:text-[rgb(141,94,183)] transition-colors hover:bg-zinc-200 font-['Rubik_Marker_Hatch'] z-10"
          >
            <FontAwesomeIcon className="mx-1" icon={faBottleDroplet} />
            {windowSize.width > 800 ? `Tori's Shampoos` : "T"}
          </a.div>
          <a.div
            style={navPositionSpring}
            className="w-80 h-20 m-auto fixed top-11 z-10"
          >
            <button
              onClick={() => setPage(0)}
              className={`mx-4 transition-colors p-4 rounded-xl ${
                page === 0
                  ? "text-[rgb(95,61,121)] bg-zinc-200"
                  : "text-zinc-300 hover:text-[rgb(95,61,121)] hover:bg-zinc-400"
              }`}
              disabled={page === 0}
            >
              About
            </button>
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className={`mx-4 transition-colors p-4 rounded-xl ${
                page === 1
                  ? "text-[rgb(113,69,146)] bg-zinc-200"
                  : "text-zinc-300 hover:text-[rgb(91,61,117)] hover:bg-zinc-200/50"
              }`}
            >
              Catalogue
            </button>
          </a.div>
        </div>
        <a.div style={contentSpring} className="w-full fixed h-full">
          <div className="absolute w-full h-full overflow-y-scroll">
            {page === 0 && (
              <div className="absolute top-36 text-center w-[60%] m-auto left-0 right-0 text-zinc-300">
                <h1 className="text-4xl my-8 font-['Pacifico']">
                  What are they~?
                </h1>
                <p className="my-12 portrait:text-sm text-xl font-['Raleway'] portrait:w-[95%]">
                  Tori's Home-Made Shampoos™ are potion sized bottles made by
                  the little purple Fox himself. Each one is guaranteed to keep
                  your fur, or hair, nice and soft, shiny, and smelling great
                  for days. On average a bottle will get three uses. Be sure to
                  visit Tori for refills, and to try other scents!
                  <br />
                  <br />
                  Each bottle is only 10 Silver!
                </p>
                <img src="toroy.jpg" className="w-80 rounded-2xl m-auto" />
                <p className="my-2">
                  <FontAwesomeIcon className="text-4xl" icon={faBattleNet} />
                  <span className="relative -top-1 mx-2">
                    Toroy-WyrmrestAccord <FontAwesomeIcon icon={faPaw} />
                  </span>
                  <br />
                  <br />
                </p>
              </div>
            )}
            {page === 1 && (
              <div className="absolute w-[80%] m-auto left-0 right-0 h-full top-36 text-zinc-300">
                <Suspense>
                  <CatalogueComponent />
                </Suspense>
              </div>
            )}
          </div>
        </a.div>
        <a.div
          style={{ backgroundImage: "url(lavender.jpg)", ...backgroundSpring }}
          className="fixed w-screen h-screen -z-50 bg-cover"
        ></a.div>
        <div
          className={`fixed w-screen h-screen -z-20 bg-zinc-900/80 transition-all ${
            page === 0 ? "backdrop-blur-sm" : "backdrop-blur-lg"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Main;
