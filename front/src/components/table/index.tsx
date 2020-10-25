import React, { useContext } from "react";
import withStyles, { WithStylesProps } from "react-jss";
import { ParticipantsContext } from "../../context";

const styles = {
    root: {
        width: "100%",
    }
};

interface TableProps extends WithStylesProps<typeof styles> {
};

const Table: React.FC<TableProps> = (props) => {
    const { classes } = props;
    const [data, setData] = useContext(ParticipantsContext) as any[][]
    // const data: any[] = useContext(ParticipantsContext)

    // const fakeData = [
    //     {
    //         fName: "guilherme",
    //         lName: "luiz",
    //         p: 5
    //     },
    //     {
    //         fName: "guilherme",
    //         lName: "luiz",
    //         p: 5
    //     },
    //     {
    //         fName: "guilherme",
    //         lName: "luiz",
    //         p: 5
    //     },
    //     {
    //         fName: "guilherme",
    //         lName: "luiz",
    //         p: 5
    //     },
    //     {
    //         fName: "guilherme",
    //         lName: "luiz",
    //         p: 5
    //     },
    //     {
    //         fName: "guilherme",
    //         lName: "luiz",
    //         p: 5
    //     },
    // ];
    const renderData = () => {
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
                    <th>Participartion</th>
                </tr>
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    );
}

export default withStyles(styles)(Table);