import React from "react";

function App() {
  const savePhoto = (event) => {
    const data = new FormData();
    const response = data.append("file", event.target.files[0]);
    console.log(data.get("file"));
    console.log(response);
  };

  return (
    <div>
      <input type="file" onChange={savePhoto} />
    </div>
  );
}

export default App;
