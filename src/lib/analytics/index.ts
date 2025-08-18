/*
 * Analytics helper for GA4
 *
 * Exposes a simple event tracking function. GA4 measurement ID
 * should be provided via NEXT_PUBLIC_GA_ID environment variable.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

/**
 * Sends a GA4 event. Only fires if GA_MEASUREMENT_ID is present and
 * window.gtag is available (i.e. after the GA script has loaded).
 */
export function trackEvent({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}