import "./App.css";

import { Welcome } from "@/components/Welcome";
import { useState } from "react";

import { Vyber } from "./components";

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  return (
    <>
      {isHomePage ? (
        <Welcome setIsHomePage={setIsHomePage} />
      ) : (
        <div className="max-w-[1440px] mx-auto relative ">
          {/* <img
          className="absolute top-[32px] right-[53px]"
          src={Logo}
          alt="Herbalife"
        /> */}

          <Vyber setIsHomePage={setIsHomePage} />
        </div>
      )}
    </>
  );
}

export default App;
