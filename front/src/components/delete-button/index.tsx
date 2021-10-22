import Axios from "axios";
import React, { useContext } from "react";
import withStyles, { WithStylesProps } from "react-jss";
import { ParticipantsContext } from "../context/context";
import { ParticipantData } from "../../types";

const styles = {
  root: {
    border: "none",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
  },
};

type DeleteButtonProps = WithStylesProps<typeof styles>;

const DeleteButton: React.FC<DeleteButtonProps> = ({
  classes,
}: DeleteButtonProps) => {
  const { setData } = useContext(ParticipantsContext);

  const deleteParticipants = (): void => {
    Axios.delete<Array<ParticipantData>>(
      "http://localhost:4000/delete"
    ).then((res) => setData(res.data));
  };

  return (
    <button className={classes.root} onClick={deleteParticipants}>
      <span role="img" aria-label="delete icon">
        🗑️
      </span>
    </button>
  );
};

export default withStyles(styles)(DeleteButton);
