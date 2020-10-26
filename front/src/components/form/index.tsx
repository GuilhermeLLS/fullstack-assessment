import Axios from 'axios'
import React, { useContext, useState } from 'react'
import withStyles, { WithStylesProps } from 'react-jss'
import { ParticipantsContext } from '../../context'

const styles = {
    root: {

    }
}

interface FormProps extends WithStylesProps<typeof styles> {
}

interface FormData {
    name: string,
    lastname: string,
    participation: number,
}

const Form: React.FC<FormProps> = (props: FormProps) => {
    const [formData, setFormData] = useState({})
    const [, setData] = useContext(ParticipantsContext)
    
    const onHandleSubmit = (event: any) => {
        event.preventDefault()
        alert(JSON.stringify(formData))
        Axios.post("http://localhost:4000/participant", formData).then(res => setData(res.data))
        setFormData({
            name: "",
            lastname: "",
            participantion: "",
        })
    }

    const changeHandler = (event: any) => {
        const nam = event.target.name;
        const val = event.target.value;
        setFormData({...formData, [nam]: val});
    }
    
    return (
        <form onSubmit={onHandleSubmit}>
            <label>Name: </label>
            <input type="text" name={"name"} onChange={changeHandler}/>
            <label>Lastname: </label>
            <input type="text" name={"lastname"} onChange={changeHandler}/>
            <label>Participantion: </label>
            <input type="text" name={"participation"} onChange={changeHandler}/>
            <input type="submit"></input>
        </form>
    );
}

export default withStyles(styles)(Form)