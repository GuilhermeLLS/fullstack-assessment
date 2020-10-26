import React, { useContext, useEffect, useState } from "react";
import withStyles, { WithStylesProps } from "react-jss";
import Pie from "react-chartjs-2";
import { ParticipantsContext } from "../../context";

const styles = {
    root: {
        width: "300px",
        height: "300px",
    },
};

interface ChartProps extends WithStylesProps<typeof styles> {
}

const Chart: React.FC<ChartProps> = (props) => {
    const { classes } = props;
    const [chartData, setChartData] = useState({});
    const [data,] = useContext(ParticipantsContext) as any[][]

    const getLabelsFromData = () => data.map((elem) => elem.name)
    const getParticipationFromData = () => data.map((elem) => elem.participation)

    const chart = () =>
        setChartData({
            // !labels are going to be people names
            labels: getLabelsFromData(),
            datasets: [
                {
                    fill: true,
                    backgroundColor: [
                        'black',
                        'white'
                    ],
                    // ! data are going to be the values
                    data: getParticipationFromData(),
                    // Notice the borderColor 
                    borderColor: ['black', 'red'],
                    borderWidth: [2, 2]
                }
            ]
        })

    useEffect(() => {
        chart()
    }, [])

    return (
        <div className={classes.root}>
            <Pie data={chartData} />
        </div>
    );
};

export default withStyles(styles)(Chart);