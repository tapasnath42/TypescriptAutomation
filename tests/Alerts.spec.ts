1. Handling a Standard Alert (OK button)

// Register the listener first
page.once('dialog', async dialog => {
  console.log(`Dialog message: ${dialog.message()}`); // Logs the text
  await dialog.accept(); // Clicks "OK"
});

// Trigger the alert
await page.locator('#alert-button').click();


2. Handling a Confirm Dialog (OK / Cancel)

// To click "Cancel"
page.once('dialog', async dialog => {
  expect(dialog.type()).toBe('confirm');
  await dialog.dismiss(); 
});

await page.locator('#delete-button').click();

3. Handling a Prompt Dialog (Text Input)

page.once('dialog', async dialog => {
  expect(dialog.type()).toBe('prompt');
  await dialog.accept('My Custom Input Text'); // Types text and clicks OK
});

await page.locator('#prompt-button').click();
