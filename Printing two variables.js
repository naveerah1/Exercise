//printing two variables inside single <h1>
import React from "react";
function App() {
  const firstName = "Atlas";
  const lastName = "Lily";

  return (
    <div>
      <h1>{`${firstName} ${lastName}`}</h1>
    </div>
  );
}

export default App;
