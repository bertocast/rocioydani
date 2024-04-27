import { useLocation } from "react-router-dom";

export default function Home(props: {
  routes: { name: string; path: string }[];
}) {
  const location = useLocation();

  return (
    <div className="w-full py-4 px-0">
      <div className="leading-[1.3] flex flex-col justify-center my-3 mx-auto w-fit text-gray-900 uppercase">
        <div className="pt-0 px-9 pr-5">
          <div className="text-center">
            <span>30 de Noviembre de 2024</span>
          </div>
        </div>
        <div className="pt-0 px-9 pr-5">
          <div className="text-center">Madrid</div>
        </div>
      </div>
      <div className="pt-12 px-0 pb-10">
        <ul className="flex flex-col items-center list-none m-0 p-0 border-t">
          {props.routes.map((route) => (
            <li className="text-center w-full p-2 border-b">
              <a rel="nofollow" className="block p-0 m-0" href={route.path}>
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
