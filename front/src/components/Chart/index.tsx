import React, { useContext } from "react";
import withStyles, { WithStylesProps } from "react-jss";
import Pie from "react-chartjs-2";
import { ParticipantsContext } from "../../context";
import { generateHexColor } from "../../utils";

const styles = {
    root: {
        width: "20%",
        "@media(max-width: 768px)": {
            width: "100%",
        }
    },
};

interface ChartProps extends WithStylesProps<typeof styles> {
}

const Chart: React.FC<ChartProps> = (props) => {
    const { classes } = props;
    const [data,] = useContext(ParticipantsContext) as any[][]
    
    if (!data || data.length === 0) {
        return null
    }

    const getLabelsFromData = () => data.map((elem) => elem.name)
    const getParticipationFromData = () => data.map((elem) => elem.participation)
    const getColors = () => {
        const colors: string[] = []
        data.forEach((_) => colors.push(generateHexColor(colors)))
        return colors;
    }

    const chart = () => {
        return {
            labels: getLabelsFromData(),
            datasets: [
                {
                    fill: true,
                    backgroundColor: [...getColors()],
                    data: getParticipationFromData(),
                    borderColor: [],
                    borderWidth: [2, 2]
                }
            ]
        }
    }

    return (
        <div className={classes.root}>
            <Pie height={200} width={200} data={chart()} />
        </div>
    );
};

export default withStyles(styles)(Chart);