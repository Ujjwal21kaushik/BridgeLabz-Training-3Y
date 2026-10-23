// Q5. Boolean Logic Access System
// Access is secure only when all required conditions are true.

const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// && requires every security condition to be true.
// || and ! are also demonstrated in the diagnostic messages.
const isSecure =
  isAlarmOn &&
  isDoorLocked &&
  isWindowClosed &&
  isOwnerInside;

if (isSecure) {
  console.log("Secure");
} else {
  console.log("Unsafe");
}

// Extra diagnostic: alert if either the door or window is not secured.
if (!isDoorLocked || !isWindowClosed) {
  console.log("Warning: Check the door or window.");
}

// Change the values above and run again to test other outcomes.
