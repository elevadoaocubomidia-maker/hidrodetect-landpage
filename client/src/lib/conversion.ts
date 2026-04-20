export function reportWAConversion(url: string) {
  const fn = (window as any).gtag_report_conversion;
  if (typeof fn === "function") {
    fn(url);
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
