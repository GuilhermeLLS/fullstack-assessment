import React from "react";
import Chart from "./components/Chart";
import Form from "./components/form";
import Table from "./components/table";
import ParticipantsProvider from "./context"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form/>
      <ParticipantsProvider>
        <Chart />
        <Table />
      </ParticipantsProvider>
    </div>
  );
}

export default App;
