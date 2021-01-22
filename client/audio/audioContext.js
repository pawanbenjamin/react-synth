export const createAudioContext = () => {
  const audioCtx = window.AudioContext || window.webkitAudioContext;
  const context = new audioCtx();
  context.onstatechange = () => {
    console.log(context.state);
  };
  const gain = context.createGain();
  const biquadFilter = context.createBiquadFilter();
  gain.connect(biquadFilter);
  biquadFilter.connect(context.destination);
  return context;
};
