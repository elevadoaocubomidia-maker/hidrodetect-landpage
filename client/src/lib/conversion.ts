export function reportWAConversion(url: string) {
  const dl = (window as any).dataLayer;
  if (Array.isArray(dl)) {
    dl.push({ event: "whatsapp_click" });
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
