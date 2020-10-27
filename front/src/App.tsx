import React from "react";
import Chart from "./components/chart";
import Form from "./components/form";
import Table from "./components/table";
import Text from "./components/text";
import DeleteButton from "./components/delete-button";
import ParticipantsProvider from "./context";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    textAlign: "center"
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "30px 0",
    "@media(max-width: 768px)": {
      flexDirection: "column"
    }
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ParticipantsProvider>
        <Form />
        <Text tag={"h1"} text={"DATA"} />
        <Text tag={"span"} text={"Para excluir todos os Participantes, clique no ícone de lixeira ao lado"} />
        <DeleteButton/>
        <div className={classes.content}>
          <Table />
          <Chart />
        </div>
      </ParticipantsProvider>
    </div>
  );
}

export default App
