import React, { useEffect, useState } from "react";
import Router from "./Router";
import Loader from "./components/Helper/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className={`iyf-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}
      <div className={`iyf-visible ${!loading ? "active" : ""}`}>
        <Router />
      </div>
    </>
  );
}

export default App;
