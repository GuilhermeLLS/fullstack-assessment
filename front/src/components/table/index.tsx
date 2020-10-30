import React, { useContext } from "react";
import withStyles, { WithStylesProps } from "react-jss";
import {
  DEFAULT_CONTEXT_STATE_VALUES,
  ParticipantsContext,
} from "../context/context";
import { areObjectsEqual } from "../../utils";

const styles = {
  root: {
    width: "40%",
    height: "300px",
    borderCollapse: "collapse",
    alignSelf: "center",
    margin: "0 30px 0 0",
    "& table, th, td": {
      lineHeight: "25px",
      border: "1px solid #DADADA",
    },
    "@media(max-width: 768px)": {
      width: "90%",
      margin: "0 0 30px 0",
    },
  },
};

interface TableProps extends WithStylesProps<typeof styles> { }

const Table: React.FC<TableProps> = ({ classes }) => {
  const { data } = useContext(ParticipantsContext);

  if (
    !data ||
    data.length === 0 ||
    areObjectsEqual(data, DEFAULT_CONTEXT_STATE_VALUES.data)
  ) {
    return null;
  }

  const renderDataRows = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>{item.lastname}</td>
          <td>{item.participation}</td>
        </tr>
      );
    });
  };

  return (
    <table className={classes.root}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Participation</th>
        </tr>
      </thead>
      <tbody>{renderDataRows()}</tbody>
    </table>
  );
};

export default withStyles(styles)(Table);
