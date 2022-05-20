import { useState } from "react";
import styled from "styled-components";

/*
<Modal>
  <SomeChildComponent />
  <AnotherChildComponent />
</Modal>
*/

// styles
const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #0009;
`;
// const ModalStyle = styled.div``;
const ModalBody = styled.div`
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  border-radius: 10px;
`;

export function Modal({ children }) {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      {/* temp button to allow demonstration */}
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>X</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
}
