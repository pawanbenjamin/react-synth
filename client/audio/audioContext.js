export const createAudioContext = () => {
    const audioCtx = window.AudioContext || window.webkitAudioContext;
    const context = new audioCtx()
    conxtext.onstatechange = () => {
        console.log(context.state)
    }
}