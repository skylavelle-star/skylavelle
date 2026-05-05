declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | 'newsletter_signup_click'
  | 'resource_download_click'
  | 'product_view'
  | 'product_buy_click'
  | 'contact_form_submit'
  | 'advisory_offer_click'
  | 'start_here_card_click';

export function track(
  event: AnalyticsEvent,
  params?: Record<string, string | number>
): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params ?? {});
}
