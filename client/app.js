import React from "react";
import Keyboard from "./components/keyboard";
import { createAudioContext } from "./audio/audioContext";

const App = () => {
  const { context, gain, biquadFilter } = createAudioContext();

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h3>
        Use your keboard starting on 'z' for your lower octave, and 'q' for the
        higher octave
      </h3>
      <h3>move volume knob and set octave to start</h3>
      <Keyboard context={context} gain={gain} biquadFilter={biquadFilter} />
    </div>
  );
};

export default App;
