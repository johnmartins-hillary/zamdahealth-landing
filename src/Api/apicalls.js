
// ── Contact form ──────────────────────────────────────────────────────────────

import api from "./baseUri";

/**
 * Submit the contact form
 * @param {{ fullName: string, email: string, phone?: string, countryCode?: string, company?: string, message: string }} data
 */
export const submitContactForm = async (data) => {
  const response = await api.post("v1/contact", {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone || "",
    countryCode: data.countryCode || "+234",
    company: data.company || "",
    message: data.message,
  });
  return response.data;
};

// ── Demo request ──────────────────────────────────────────────────────────────
/**
 * Submit a demo booking request
 * @param {{ name: string, email: string, company?: string, phone?: string }} data
 */
export const submitDemoRequest = async (data) => {
  const response = await api.post("v1/contact", {
    fullName: data.name,
    email: data.email,
    phone: data.phone || "",
    countryCode: data.countryCode || "+234",
    company: data.company || "",
    message: `Demo request from ${data.name}${data.company ? ` at ${data.company}` : ""}. Please get in touch to schedule a demo.`,
  });
  return response.data;
};

// ── Newsletter subscribe ───────────────────────────────────────────────────────
/**
 * Subscribe to the newsletter
 * @param {{ email: string }} data
 */
export const subscribeNewsletter = async (data) => {
  const response = await api.post("v1/newsletter/subscribe", {
    email: data.email,
  });
  return response.data;
};
