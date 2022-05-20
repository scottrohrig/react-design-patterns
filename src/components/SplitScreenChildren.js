import { Container, Pane } from "./Styles";

function SplitScreenChildren({ children, leftWeight = 1, rightWeight = 1 }) {
  const [left, right] = children;
  return (
    <Container>
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
