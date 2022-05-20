import { Container, Pane } from "./Styles";

function SplitScreen({
  left: Left,
  right: Right,
  leftWeight = 1,
  rightWeight = 1
}) {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  );
}

export { SplitScreen };
