/**
 * Vercel Speed Insights initialization script
 * This script initializes Speed Insights for the TechHorizon website
 */

import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSpeedInsights);
} else {
  initializeSpeedInsights();
}

function initializeSpeedInsights() {
  // Inject Speed Insights with default configuration
  // In production on Vercel, this will automatically track page performance
  injectSpeedInsights({
    debug: false, // Set to true for debugging in development
  });
}
