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

    fetchInterns;
  }, []);

  return (
    <div>
      <div className=" bg-[#7c8f8f] min-h-screen">
        <TheNavbar />

        <div>
          {/* {interns.map((intern) => {
            <Main
              key={intern.id}
              name={intern.name}
              gender={intern.gender}
              github={intern.github}
              country={intern.country}
            />;
          })} */}

          {interns.map((intern) => (
            <Main
              key={intern.id}
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
