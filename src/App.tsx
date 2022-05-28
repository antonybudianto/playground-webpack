import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (__FLAG__) {
      console.log("flag on");
    } else {
      // This won't be bundled
      console.log("flag off");
      const dayjs = require("dayjs");
      console.log(dayjs().format("DD/MM/YYYY"));
    }
  }, []);

  return <div>Hello world!</div>;
};

export default App;
