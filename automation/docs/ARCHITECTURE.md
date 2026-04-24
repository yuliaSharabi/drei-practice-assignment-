# Test Architecture & Execution

## Architecture
- **Directory**: `automation/` (Standalone)
- **Framework**: Nightwatch.io
- **Browsers**: Chrome, Firefox
- **Reporting**: Nightwatch.io Native HTML Reporter
- **Failure Handling**: Screenshots automatically captured on failure in `automation/docs/screenshots/`

## How to Run
1. Navigate to the automation directory: `cd automation`
2. Run Chrome (Default): `npm test`
3. Run Firefox: `npm test -- --env firefox`
4. Run Chrome Mobile: `npm test -- --env chrome_mobile`
5. View Report: Open `automation/tests_output/nightwatch-html-report/index.html` in your browser.

## Test Documentation
All test design documents are located in `automation/docs/`.
