/**
 * Initialize the Engine, load necessary components and set listeners.
 * @param width
 * @param height
 * @param canvasId
 * @param autoRun
 * @param webGlEnabled
 * @param debugMode
 */
export default function ({
  width, height, canvasId, autoRun, webGlEnabled, debugMode,
}) {
  // Depending on if webGl is enabled, initialize 2Dimensional or 3Dimensional.
  if (!webGlEnabled) {
    // Canvas.initialize2D(width, height, canvasId)
  } else {
    // Canvas.initialize3D(width, height, canvasId)
  }

  // Collision.initialize()
  // Debug.setDebugMode(debugMode)
  // setListeners();
  // LoadDefaultComponents

  if (autoRun) {
    // Run();
  }
}
