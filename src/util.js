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
