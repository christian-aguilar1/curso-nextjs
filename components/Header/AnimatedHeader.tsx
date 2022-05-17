import { Header, Transition } from "semantic-ui-react";
import Palta from "@components/SVGIcons/Palta";
import React from "react";

type AnimatedHeaderProps = {
  visible: boolean;
  onClick: () => void;
  onComplete: () => void;
};

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => {
  return (
    <Header size="huge" as="h1" onClick={onClick}>
      Platzi
      <Transition
        animation="jingle"
        visible={visible}
        duration={900}
        onComplete={onComplete}
      >
        <Palta size="58px" />
      </Transition>
      Avo
    </Header>
  );
};

export default AnimatedHeader;
