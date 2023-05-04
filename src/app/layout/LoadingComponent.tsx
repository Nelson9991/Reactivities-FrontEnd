import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
  inverted?: boolean;
  content?: string;
}

export const LoadingComponent = ({
  inverted = true,
  content = "Loading...",
}: Props) => {
  return (
    <>
      <Dimmer active={true} inverted={true}>
        <Loader content={content} />
      </Dimmer>
    </>
  );
};
