import { Container, Pane } from "./Styles";

function SplitScreenChildren({ style={}, children, leftWeight = 1, rightWeight = 1 }) {
  const [left, right] = children;
  return (
    <Container style={style}>
      <Pane weight={leftWeight}>
        {/* left props passed here is more readable */}
        {left}
      </Pane>
      <Pane style={{ borderLeft: "solid" }} weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  );
}

export { SplitScreenChildren };
