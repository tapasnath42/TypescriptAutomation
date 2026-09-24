// errors/ElementNotFoundError.ts
export class ElementNotFoundError extends Error {
  constructor(elementName: string, message?: string) {
    super(message || `Required element '${elementName}' was not found on the page.`);
    this.name = 'ElementNotFoundError';
    throw ElementNotFoundError; // // Re-Throw to fail the test.
  }
}


/*

constructor(elementName: string, message?: string)
elementName: string: A required name or CSS selector for the missing element (e.g., "Submit Button").
message?: string: An optional custom error message. If the developer wants to write a specific message, they can pass it here. If they don't, it defaults to undefined.

message || `Required element '${elementName}' was not found on the page.`
This uses the logical OR (||) operator to provide a fallback:
If message is provided (and is a non-empty string), super() uses that custom message.
If message is omitted (or empty), the operator falls back to the dynamic string template: Required element '...' was not found on the page.


*/