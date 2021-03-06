import Axios from "axios";
import React, { useContext, useState } from "react";
import withStyles, { WithStylesProps } from "react-jss";
import { ParticipantsContext } from "../context/context";
import { ParticipantData } from "../../types";

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
    border: "2px solid #FFFFFF",
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
    border: "1px solid #FFFFFF",
    width: "100px",
    backgroundColor: "#DADADA",
    color: "#FFFFFF",
  },
};

interface FormProps extends WithStylesProps<typeof styles> { }

const Form: React.FC<FormProps> = ({ classes }: FormProps) => {
  const [formData, setFormData] = useState({});
  const { setData } = useContext(ParticipantsContext);

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    Axios.post<Array<ParticipantData>>("http://localhost:4000/participant", formData)
      .then((res) => setData(res.data))
      .catch((err) => alert(err.response.data));
    const eventTarget = event.target as HTMLFormElement;
    eventTarget.reset();
    setFormData({
      name: "",
      lastname: "",
      participation: "",
    });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onHandleSubmit}>
        <input
          data-testid={"NameInput"}
          className={classes.input}
          placeholder={"Name"}
          type="text"
          name={"name"}
          onChange={changeHandler}
        />
        <input
          data-testid={"LastNameInput"}
          className={classes.input}
          placeholder={"Last Name"}
          type="text"
          name={"lastname"}
          onChange={changeHandler}
        />
        <input
          data-testid={"ParticipationInput"}
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
