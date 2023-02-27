// app/lib/secondsToMinutes.ts
function secondsToMinutes(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export {
  secondsToMinutes
};
//# sourceMappingURL=/build/_shared/chunk-XOLG3HXY.js.map
