# Test Plan: UI Test #1 - Main Page Load & Basic Validation

## Scenario
Validate that the main landing page loads correctly and essential UI elements are present and visible.

## Test Case ID
UI_TEST_001

## Target URL
`http://localhost:3000` (assuming standard Vite dev server port)

## Expected Behavior
1. The page loads with an HTTP 200 OK status.
2. The page title is present and correct.
3. The "Connect Wallet" button is visible to the user.
4. Key images (e.g., logo, hero image) are loaded and have valid sources.

## Implementation Details
- **Tool:** Jest & Playwright (or similar browser driver)
- **Reporting:** HTML Report generated at `automation/docs/test-report.html`

## Steps
1. Navigate to the main URL (`http://localhost:3000`).
2. Assert that the page title matches the expected application name.
3. Assert that the "Connect Wallet" button exists in the DOM.
4. Assert that the main logo or hero image is loaded (checking `naturalWidth` or `complete` status).

## Edge Cases to Consider
- Page takes too long to load (timeout handling).
- The "Connect Wallet" button is present but disabled or hidden.
- Images fail to load (checking for broken links).
