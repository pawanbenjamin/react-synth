import React, { useState } from "react";
import createAudioContext from "../audio/AudioContext";

const Keyboard = () => {
  const [waveForm, setWaveForm] = useState("sawtooth");
  const [filter, setFilter] = useState("lowpass");
  const [filterFreq, setFilterFreq] = useState(0);
  const [octave, setOctave] = useState(0.125);
  const [gain, setGain] = useState(0.5);

  console.log(octave);

  return (
    <div className="Keyboard">
      <ul className="set">
        <div className="controls">
          <span>Waveform: </span>
          <select id="waveform" onChange={(e) => setWaveForm(e.target.value)}>
            <option value="sine">Sine</option>
            <option value="square">Square</option>
            <option value="sawtooth" selected="selected">
              Sawtooth
            </option>
            <option value="triangle">Triangle</option>
          </select>
          <br />
          <span>Gain: </span>
          <input
            id="gain"
            type="range"
            min="0.0"
            max="1.0"
            step="0.01"
            value={gain}
            onChange={(e) => setGain(e.target.value)}
          />
          <br />
          <span>Filter Type: </span>
          <select id="filterType" onChange={(e) => setFilter(e.target.value)}>
            <option value="lowpass" selected="selected">
              Lowpass
            </option>
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
            onChange={(e) => setFilterFreq(e.target.value)}
          />
          <div className="oct">
            <span>Octave: </span>
            <select id="octave" onChange={(e) => setOctave(e.target.value)}>
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
