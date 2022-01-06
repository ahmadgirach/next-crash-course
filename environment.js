const isProduction = process.env.NODE_ENV === "production";
export const baseUrl = isProduction ? "https://yourwebsite.com" : "http://localhost:3000";