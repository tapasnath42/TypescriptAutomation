// errors/ElementNotFoundError.ts
export class ElementNotFoundError extends Error {
  constructor(elementName: string, message?: string) {
    super(message || `Required element '${elementName}' was not found on the page.`);
    this.name = 'ElementNotFoundError';
    throw ElementNotFoundError; // // Re-Throw to fail the test.
  }
}
