import React, { useState } from "react";



const dailyTasksCard = () => {
  let day = 1
  return(
    <div>
      <h1>`Day:${day}`</h1>
    </div>
  )
}

const dailyTasksList = () => {
  return(
    <div>

    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>30-Day Challenge </h1>
      <div>
        <button>30-Days</button>
        <button>60-Days</button>
        <button>90-Days</button>
        <button>100-Days</button>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
