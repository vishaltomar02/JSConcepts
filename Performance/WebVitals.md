# Web Vitals
- Optimizing for quality of user experience is key to the long-term success of any site on the web. Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.

- The current set for 2020 focuses on three aspects of the user experience—loading, interactivity, and visual stability—and includes the following metrics (and their respective thresholds):

## Largest Contentful Paint (LCP): 
measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.

## Interaction to Next Paint (INP):
measures interactivity. To provide a good user experience, pages should have a INP of 200 milliseconds or less.
## Cumulative Layout Shift (CLS):
measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1. or less.

## To ensure you're hitting the recommended target for these metrics for most of your users, a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices.

- The easiest way to measure all the Core Web Vitals is to use the web-vitals JavaScript library, a small, production-ready wrapper around the underlying web APIs that measures each metric in a way that accurately matches how they're reported by all the Google tools listed earlier.


```javascript 
import {onCLS, onINP, onLCP} from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', {body, method: 'POST', keepalive: true});
}

onCLS(sendToAnalytics);
onINP(sendToAnalytics);
onLCP(sendToAnalytics);
```

## The truth is that performance is relative:

- A site might be fast for one user (on a fast network with a powerful device) but slow for another user (on a slow network with a low-end device).
- Two sites may finish loading in the exact same amount of time, yet one may seem to load faster (if - it loads content progressively rather than waiting until the end to display anything).
- A site might appear to load quickly but then respond slowly (or not at all) to user interaction.

## To help ensure the metrics are relevant to users, we frame them around a few key questions:

Is it happening?	Did the navigation start successfully? Has the server responded?
Is it useful?	Has enough content rendered that users can engage with it?
Is it usable?	Can users interact with the page, or is it busy?
Is it delightful?	Are the interactions smooth and natural, free of lag?

# How metrics are measured
## Performance metrics are generally measured in one of two ways:

- In the lab: using tools to simulate a page load in a consistent, controlled environment
- In the field: on real users actually loading and interacting with the page

# Types of metrics
There are several other types of metrics that are relevant to how users perceive performance.

- Perceived load speed: how quickly a page can load and render all of its visual elements to the screen.
- Load responsiveness: how quickly a page can load and execute any required JavaScript code in order for components to respond quickly to user interaction
- Runtime responsiveness: after page load, how quickly can the page respond to user interaction.
- Visual stability: do elements on the page shift in ways that users don't expect and potentially interfere with their interactions?
- Smoothness: do transitions and animations render at a consistent frame rate and flow fluidly from one state to the next?