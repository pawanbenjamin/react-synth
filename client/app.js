import React from "react";
import Keyboard from "./components/keyboard";
import { createAudioContext } from "./audio/audioContext";

const App = () => {
  const { context, gain, biquadFilter } = createAudioContext();

  return (
    <div>
      <h3>Hello from inside the app!</h3>
      <Keyboard context={context} gain={gain} biquadFilter={biquadFilter} />
    </div>
  );
};

export default App;
