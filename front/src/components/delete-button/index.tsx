import Axios from 'axios';
import React, { useContext } from 'react'
import withStyles, { WithStylesProps } from "react-jss";
import { ParticipantsContext } from '../../context';

const styles = {
    root: {

    }
}

interface DeleteButtonProps extends WithStylesProps<typeof styles> { }

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
    const [, setData] = useContext(ParticipantsContext)

    const deleteParticipants = () => {
        Axios.delete("http://localhost:4000/delete").then(res => setData(res.data))
    }

    return (
        <button
            className="root"
            onClick={() => deleteParticipants()}    
        >
            <span role={"img"} aria-label={"delete icon"}>🗑️</span>
        </button>
    )

}

export default withStyles(styles)(DeleteButton)