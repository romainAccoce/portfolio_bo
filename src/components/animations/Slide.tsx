import { animated, config, useSpring } from "@react-spring/web";
import { ReactNode } from "react";

interface Props {
  condition: boolean;
  children: ReactNode;
}

function Slide({ condition, children }: Props) {
  const styles = useSpring({
    config: config.stiff,
    to: {
      opacity: condition ? 1 : 0,
      x: condition ? 10 : 0,
    },
  });

  return (
    <animated.div
      style={{
        ...styles,
      }}
    >
      {children}
    </animated.div>
  );
}

export default Slide;
