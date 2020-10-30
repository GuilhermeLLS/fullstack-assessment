import React from "react";
import withStyles, { WithStylesProps } from "react-jss";

const styles = {};

interface TextProps extends WithStylesProps<typeof styles> {
  text: string;
  tag: string;
}

const Text: React.FC<TextProps> = (props: TextProps) => {
  const { tag = "span", text } = props;
  const isTextTagValid = () => /^(span|h1|h2|h3|h4|h5|h6|label|p)$/.test(tag);
  const Tag = isTextTagValid() ? (tag as any) : ("span" as any);

  return <Tag>{text}</Tag>;
};

export default withStyles(styles)(Text);
