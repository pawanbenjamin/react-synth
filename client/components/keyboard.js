import React, { useState, useEffect } from "react";
import { freqTable } from "../audio/frequencies";

const Keyboard = (props) => {
  const { context } = props;
  context.resume();

  const [waveForm, setWaveForm] = useState("sine");
  const [filter, setFilter] = useState("lowpass");
  const [filterFreq, setFilterFreq] = useState(0);
  const [octave, setOctave] = useState(0.125);
  const [gainLvl, setGainLvl] = useState(0.5);

  context.onStateChange = () => console.log(context.state);

  const gain = context.createGain();

  const biquadFilter = context.createBiquadFilter();
  gain.connect(biquadFilter);
  biquadFilter.connect(context.destination);

  useEffect(() => {
    window.addEventListener("keydown", keyDown, false);
    window.addEventListener("keyup", keyUp, false);

    gain.gain.setValueAtTime(gainLvl, context.currentTime);
    biquadFilter.frequency.setValueAtTime(filterFreq, context.currentTime);

    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [waveForm, filterFreq, filter, octave, gainLvl, context]);

  let activeOscillators = {};

  const keyDown = (e) => {
    const key = e.keyCode;
    if (freqTable[key] && !activeOscillators[key]) {
      playNote(key);
    }
  };

  const keyUp = (e) => {
    const key = e.keyCode;
    if (freqTable[key] && activeOscillators[key]) {
      activeOscillators[key].stop();
      delete activeOscillators[key];
    }
  };

  const playNote = (key) => {
    const osc = context.createOscillator();
    osc.frequency.setValueAtTime(freqTable[key] * octave, context.currentTime);
    console.log(waveForm);
    osc.type = waveForm;
    activeOscillators[key] = osc;
    activeOscillators[key].connect(gain);
    console.log("------Oscillator Node-------", activeOscillators[key]);
    activeOscillators[key].start();
  };

  return (
    <div className="Keyboard">
      <ul className="set">
        <div className="controls">
          <span>Waveform: </span>
          <select
            value={waveForm}
            id="waveform"
            onChange={(e) => setWaveForm(e.target.value)}
          >
            <option value="sine">Sine</option>
            <option value="square">Square</option>
            <option value="sawtooth">Sawtooth</option>
            <option value="triangle">Triangle</option>
          </select>
          <br />
          <span>Lvl: </span>
          <input
            id="gain"
            type="range"
            min="0.0"
            max="1.0"
            step="0.01"
            value={gainLvl}
            onChange={(e) => setGainLvl(+e.target.value)}
          />
          <br />
          <span>Filter Type: </span>
          <select
            value={filter}
            id="filterType"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="lowpass">Lowpass</option>
            <option value="highpass">Highpass</option>
            <option value="bandpass">Bandpass</option>
          </select>
          <br />
          <span>Filter Frequency: </span>
          <input
            id="filterFrequency"
            type="range"
            min="20.0"
            max="10000.0"
            step="0.01"
            value={filterFreq}
            onChange={(e) => setFilterFreq(+e.target.value)}
          />
          <div className="oct">
            <span>Octave: </span>
            <select
              id="octave"
              value={octave}
              onChange={(e) => setOctave(+e.target.value)}
            >
              <option value="0.125">-3</option>
              <option value="0.25">-2</option>
              <option value="0.5">-1</option>
              <option value="1">0</option>
              <option value="2">1</option>
            </select>
          </div>
          <br />
          <br />
        </div>
        <div className="notes">
          <li id="z" className="white c"></li>
          <li id="s" className="black cs"></li>
          <li id="x" className="white d"></li>
          <li id="d" className="black ds"></li>
          <li id="c" className="white e"></li> {/* E */}
          <li id="v" className="white f"></li>
          <li id="g" className="black fs"></li>
          <li id="b" className="white g"></li>
          <li id="h" className="black gs"></li>
          <li id="n" className="white a"></li>
          <li id="j" className="black as"></li>
          <li id="m" className="white b"></li> {/* B */}
          <li id="q" className="white c2"></li>
          <li id="2" className="black c2s"></li>
          <li id="w" className="white d2"></li>
          <li id="3" className="black d2s"></li>
          <li id="e" className="white e2"></li> {/* E */}
          <li id="r" className="white f2"></li>
          <li id="5" className="black f2s"></li>
          <li id="t" className="white g2"></li>
          <li id="6" className="black g2s"></li>
          <li id="y" className="white a2"></li>
          <li id="7" className="black a2s"></li>
          <li id="u" className="white b2"></li> {/* B */}
          <li id="i" className="white c3"></li>
        </div>
      </ul>
    </div>
  );
};

export default Keyboard;
