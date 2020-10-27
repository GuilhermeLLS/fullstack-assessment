import Axios from "axios";
import React, { useContext, useState } from "react";
import withStyles, { WithStylesProps } from "react-jss";
import { ParticipantsContext } from "../../context";

const styles = {
  root: {
    width: "100%",
    padding: "10px 0",
    backgroundColor: "#DADADA",

    "& form": {
      "@media(max-width: 768px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
  input: {
    height: "30px",
    margin: "0 15px 0 0",
    border: "2px solid white",
    "&::placeholder": {
      padding: "0 0 0 5px",
    },
    "@media(max-width: 768px)": {
      margin: "10px 0",
      width: "250px",
    },
  },
  button: {
    padding: "10px",
    border: "1px solid white",
    width: "100px",
    backgroundColor: "#DADADA",
    color: "white",
  },
};

interface FormProps extends WithStylesProps<typeof styles> {}

interface FormData {
  name: string;
  lastname: string;
  participation: number;
}

const Form: React.FC<FormProps> = (props: FormProps) => {
  const { classes } = props;
  const [formData, setFormData] = useState({});
  const { setData } = useContext(ParticipantsContext);

  const onHandleSubmit = (event: any) => {
    event.preventDefault();
    Axios.post<Array<FormData>>("http://localhost:4000/participant", formData)
      .then((res) => setData(res.data))
      .catch((err) => alert(err.response.data));
    event.target.reset();
    setFormData({
      name: "",
      lastname: "",
      participation: "",
    });
  };

  const changeHandler = (event: any) => {
    const nam = event.target.name;
    const val = event.target.value;
    setFormData({ ...formData, [nam]: val });
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onHandleSubmit}>
        <input
          className={classes.input}
          placeholder={"Name"}
          type="text"
          name={"name"}
          onChange={changeHandler}
        />
        <input
          className={classes.input}
          placeholder={"Last Name"}
          type="text"
          name={"lastname"}
          onChange={changeHandler}
        />
        <input
          className={classes.input}
          placeholder={"Participation"}
          type="text"
          name={"participation"}
          onChange={changeHandler}
        />
        <input className={classes.button} value={"Send"} type="submit" />
      </form>
    </div>
  );
};

export default withStyles(styles)(Form);
