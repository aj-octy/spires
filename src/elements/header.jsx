import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../src/assets/img/spire.svg"

function Header() {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "OUR SERVICES", link: "/" },
        { name: "ABOUT US", link: "/" },
      ];
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const goTopath = (path) => {
        window.open(path, "_blank");
      };
  return (
    <div className="bg-security">
      <nav
        className="flex items-center p-2 lg:px-16 px-4 backdrop-blur-sm"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="" className="-m-1.5 p-1.5 flex-shrink-0">
            <span className="sr-only">Spires</span>
            <img className="h-[38px] w-[207px] aspect-auto" src={logo} alt="Spire Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden justify-center lg:flex lg:gap-x-6 gap-x-12">
          {Links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm font-medium leading-6 text-gray-50 no-underline"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            className="flex justify-center items-center w-[150px] h-[40px] px-6 m-2 text-base text-gray-800 transition-colors duration-300 bg-gray-50 rounded-md outline outline-offset-1 outline-1 focus:shadow-outline hover:bg-gray-800 hover:text-white"
            onClick={() => goTopath("")}
          >
            Contact Us{" "}
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed sm:top-0 top-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-sm">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Spires</span>
              <img className="h-8 w-auto" src={logo} alt="Spires Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              {Links.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="-mx-3 rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50 no-underline flex justify-center items-center"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex flex-row py-6 justify-center">
              <button
                className="flex justify-center items-center w-[120px] h-[40px] px-6 m-2 text-base text-gray-50 transition-colors duration-300 bg-gray-800 rounded-md outline outline-offset-1 outline-1"
                onClick={() => goTopath("https://app.Spires.in")}
              >
                Login{" "}
              </button>
              <button
                className="flex justify-center items-center w-[120px] h-[40px] px-6 m-2 text-base text-gray-50 transition-colors duration-300 bg-gray-800 rounded-md outline outline-offset-1 outline-1 focus:shadow-outline hover:bg-gray-800 hover:text-white laptop:visible"
                onClick={() => goTopath("https:app.Spires.in")}
              >
                Register{" "}
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
  }
  export default Header
  