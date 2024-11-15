import { ReactNode } from "react";
import { animated, config, useSpring } from "@react-spring/web";

interface Props {
  children: ReactNode;
  width?: number;
}

function Expansion({ children, width }: Props) {
  const styles = useSpring({
    config: config.stiff,
    to: {
      width: width,
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

export default Expansion;
