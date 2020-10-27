import React from 'react'
import withStyles, { WithStylesProps } from 'react-jss'

const styles = {

}

interface TextProps extends WithStylesProps<typeof styles> {
    text: string,
    tag: string,
}

const Text: React.FC<TextProps> = (props) => {
    const { tag = 'span', text } = props
    const Tag = tag.toLowerCase() as any

    return (
        <Tag>
            {text}
        </Tag>
    )
}

export default withStyles(styles)(Text)
