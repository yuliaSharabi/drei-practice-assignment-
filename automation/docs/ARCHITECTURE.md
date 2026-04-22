# Test Architecture & Execution

## Architecture
- **Directory**: `automation/` (Standalone)
- **Framework**: Nightwatch.io
- **Browsers**: Chrome, Firefox
- **Reporting**: `jest-html-reporter`
- **Failure Handling**: Screenshots automatically captured on failure in `automation/docs/screenshots/`

## How to Run
1. Navigate to the automation directory: `cd automation`
2. Run Chrome (Default): `./node_modules/.bin/nightwatch tests/mainPageLoad.js`
3. Run Firefox: `./node_modules/.bin/nightwatch tests/mainPageLoad.js --env firefox`
4. View Report: Open `automation/tests_output/nightwatch-html-report/index.html` in your browser.

## Test Documentation
All test design documents are located in `automation/docs/`.
