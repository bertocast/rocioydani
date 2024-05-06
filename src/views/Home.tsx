import { useLocation, useNavigate } from "react-router-dom";

export default function Home(props: {
  routes: { name: string; path: string }[];
}) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-full py-4 px-0">
      <div className="md:p-0 my-[1.1em] mx-auto max-w-[550px] text-left font-cormorant tracking-wider text-gray-600 sm:text-base text-[calc(17px * 0.875)] px-4">
        <p className="text-justify">
          ¡Por fin! Después de una larga (muy larga) espera y unas cuantas
          indirectas bien lanzadas, ¡nos casamos!
        </p>
        <p>
          <br />
        </p>
        <p className="text-justify">
          Mientras llega el gran día hemos creado esta web para que estés al día
          de todo y no te pierdas nada.
        </p>
        <p>
          <br />
        </p>
        <p className="text-justify">
          Una cosa importante, en la sección asistencia debes confirmar si vas a
          la boda o no. Confírmanos lo antes posible por favor, que así
          organizarlo todo nos será mucho más fácil.
        </p>
        <p>
          <br />
        </p>
        <p className="text-justify">Disfruta la web y ¡nos vemos muy pronto!</p>
        <p>
          <br />
        </p>
      </div>
      <div className="pt-12 px-0 pb-10">
        <ul className="flex flex-col items-center list-none m-0 p-0 border-t">
          {props.routes.map((route) => (
            <li className="text-center w-full p-2 border-b">
              <a
                rel="nofollow"
                className="block p-0 m-0"
                onClick={() => navigate(route.path)}
              >
                <span
                  className={`text-gray-900 text-sm border-b-2 block leading-[1] my-0 mx-auto pt-2 px-2 pb-[6px] transition-all duration-300 w-fit ${
                    location.pathname === route.path
                      ? "border-b-gray-900"
                      : "border-b-transparent"
                  }`}
                >
                  {route.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
