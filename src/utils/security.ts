/**
 * Sanitizes HTML content to prevent XSS attacks
 */
export const sanitizeHTML = (html: string): string => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Validates URL to prevent open redirect vulnerabilities
 */
export const validateURL = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    // Add your domain whitelist here
    const allowedDomains = [
      'adalink.io',
      'app-preview.adalink.io',
      'test-frenchiedex.adalink.io',
      'tip-preview.adalink.io',
      'frenchies.club',
      'player.vimeo.com',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'db.onlinewebfonts.com',
    ];
    return allowedDomains.some((domain) => parsedUrl.hostname.endsWith(domain));
  } catch {
    return false;
  }
};

/**
 * Generates a secure random string
 */
export const generateSecureToken = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Checks if the current environment is secure (HTTPS)
 */
export const isSecureContext = (): boolean => {
  return window.isSecureContext;
};

/**
 * Validates and sanitizes user input
 */
export const sanitizeUserInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .slice(0, 1000); // Limit input length
};
