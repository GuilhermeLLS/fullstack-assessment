import React, { useContext } from "react";
import withStyles, { WithStylesProps } from "react-jss";
import { ParticipantsContext } from "../../context";

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
        }
    },
};

interface TableProps extends WithStylesProps<typeof styles> {
};

const Table: React.FC<TableProps> = (props) => {
    const { classes } = props;
    const [data,] = useContext(ParticipantsContext) as any[][]

    if (!data || data.length === 0) {
        return null
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
            <tbody>
                {renderDataRows()}
            </tbody>
        </table>
    );
}

export default withStyles(styles)(Table);