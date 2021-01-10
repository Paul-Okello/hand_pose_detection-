// Points for fingers
const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

// Drawing function
export const drawHand = (predictions, ctx) => {
  // Check for predictions
  if (predictions.length > 0) {
    // Loop through each prediction
    predictions.forEach((prediction) => {
      // Grab landmarks
      const landmarks = prediction.landmarks;
      // Loop through landmarks and draw them
      for (let index = 0; index < landmarks.length; index++) {
        // Get x and y points
        const x = landmarks[index][0];
        const y = landmarks[index][1];
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3 * Math.PI);
        // set linecolor
        ctx.fillStyle = "aqua";
        ctx.fill();
      }
    });
  }
};
