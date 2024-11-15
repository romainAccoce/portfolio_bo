import { ReactNode } from "react";
import { animated, config, useSpring } from "@react-spring/web";

interface Props {
  condition: boolean;
  children: ReactNode;
}

function Rotation({ condition, children }: Props) {
  const styles = useSpring({
    config: config.stiff,
    to: {
      rotate: condition ? 180 : 0,
    },
  });

  return (
    <animated.div
      style={{
        ...styles,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </animated.div>
  );
}

export default Rotation;
