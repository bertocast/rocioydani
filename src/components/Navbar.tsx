import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar(props: {
  open: boolean;
  closeMenu: () => void;
  routes: { name: string; path: string }[];
}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <nav
        role="navigation"
        className={`left-0 overflow-hidden fixed top-0 transition-all duration-500 w-full z-[18] bg-white ${
          props.open ? "h-full ease-in-out" : "h-0"
        } md:hidden`}
      >
        <div className="pt-14 h-screen overflow-y-auto">
          <ul className="flex flex-col items-center list-none m-0 p-0">
            {props.routes.map((route) => (
              <li className="text-center p-2">
                <button
                  className="block p-0 m-0 cursor-pointer"
                  onClick={() => {
                    navigate(route.path);
                    props.closeMenu();
                  }}
                >
                  <span
                    className={`text-gray-900 text-md font-normal border-b-2 block leading-[1] my-0 mx-auto p-2 transition-all duration-300 ${
                      location.pathname === route.path
                        ? "border-b-gray-900"
                        : "border-b-transparent"
                    }`}
                  >
                    {route.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="mt-6 hidden md:block md:z-[1]">
        <div className="flex flex-wrap justify-center m-0 py-2 px-4">
          <ul
            data-testid="desktop-nav-row-1"
            className="flex flex-wrap items-center"
          >
            {props.routes.map((route) => (
              <li className="inline-block list-none py-0 px-2">
                <button
                  className="block m-0 py-2 px-0"
                  onClick={() => navigate(route.path)}
                >
                  <span
                    className={`text-gray-900 text-sm font-normal border-b-2 block leading-[1] my-0 mx-auto p-2 transition-all duration-300 w-fit hover:border-b-gray-900 ${
                      location.pathname === route.path
                        ? "border-b-gray-900"
                        : "border-b-transparent"
                    }`}
                  >
                    {route.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
