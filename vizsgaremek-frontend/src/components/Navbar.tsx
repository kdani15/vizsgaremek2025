import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Movies", href: "/movies", current: true },
  { name: "Watchlist", href: "/watchlist", current: false },
  { name: "Seen", href: "/seen", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [monogram, setMonogram] = useState<string>();

  useEffect(() => {
    if (location.pathname === "/login") {
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      const first = user.firstName.charAt(0);
      const last = user.lastName.charAt(0);
      setMonogram(`${first}${last}`);
    }
  }, [location]);

  const signOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refresh_jwt");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const doSearch = () => {
    navigate("/search", { state: { term: searchQuery } });
  };

  if (location.pathname === "/login") return null; // Hide navbar on login page

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={classNames(
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                doSearch();
              }}
              className="relative hidden sm:block sm:mr-4"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="rounded-md bg-gray-700 px-3 py-1 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="hidden sm:block p-1 text-gray-400 hover:text-white absolute right-0 top-0 transition"
                type="submit"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>

            {/* Mobile search icon */}
            <button
              className="sm:hidden p-1 text-gray-400 hover:text-white"
              onClick={() => setMobileSearchOpen((prev) => !prev)}
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm outline-hidden focus:outline-none shadow-[0 0 4px 0 black inset] inset-shadow-xs dark:bg-indigo-700 dark:hover:bg-indigo-600 transition">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <div className="flex justify-center items-center font-bold size-8 rounded-full uppercase">
                    {monogram}
                  </div>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                    onClick={signOut}
                  >
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-gray-800 px-4 pb-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full mt-2 rounded-md bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="p-1 text-gray-400 hover:text-white absolute transition"
              style={{ right: "1em", bottom: "1em" }}
              onClick={doSearch}
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
