import TheNavbar from "./components/TheNavbar";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    async function fetchInterns() {
      const fetchResult = await fetch("/api");
      const fetchData = await fetchResult.json();
      console.log(fetchData);

      setInterns(fetchData);
    }

    fetchInterns();
  }, []);

  return (
    <div>
      <div className=" bg-[#7c8f8f] min-h-screen">
        <TheNavbar />

        {interns.length === 0 ? <div>No Data Available Right Now </div> : ""}

        <div className="grid grid-cols-3">
          {interns.map((intern) => (
            <Main
              name={intern.name}
              gender={intern.gender}
              github={intern.github}
              country={intern.country}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
