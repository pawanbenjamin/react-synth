export const createAudioContext = () => {
  const audioCtx = window.AudioContext || window.webkitAudioContext;
  const context = new audioCtx();
  context.onstatechange = () => {
    console.log(context.state);
  };
  return { context };
};
