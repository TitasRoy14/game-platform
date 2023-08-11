import { ReactNode, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (!children) return null;

  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
