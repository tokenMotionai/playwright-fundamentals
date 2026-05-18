// import { test, expect } from '@playwright/test';
// import AxeBuilder from '@axe-core/playwright';
// test.describe('Accessiblity Tests', () => {
//     test('should pass accessibility scan', async ({ page }) => { 
//         // navigate to the page
//         await page.goto('https://sweetshop.netlify.app/');
//         // run axe-core accessibility scan
//         const results = await new AxeBuilder({ page })
//             .withTags(['wcag2aa', 'section508'])
//             .analyze();
//             // Log violations for debugging
//             if (results.violations.length > 0 ) {
//                 console.log('Accessibility violations:', results.violations);
//             }
//             // Assert no violations
//             expect(results.violations).toEqual([]);

//             page.pause();
//     })
// });

// Create a results variable.
// Instantiate the AxeBuilder class/constructor with the page object.
// Chain the withTags method to limit which accessibility rules run.
// Then call analyze() to execute the scan and return the results object.”

// import { test, expect } from 'playwright/test';
// import Axebuilder from '@axe-core/playwright';
// test('Check for WCAG 2.1 A and AA compliance', async ({ page }) => {
//     await page.goto('https://amazon.com');
//     // run axe-core accessibility scan
//     const results = await new Axebuilder ({ page }).withTags(['wcag21a', 'wcag21aa']).analyze();
//     // log violations for debugging
//     if (results.violations.length > 0) {
//         console.log('Accessibility violoations:', results.violations);
//     }
//     // assert no violations
//     expect(results.violations).toEqual([]); // this method should yield no results, this test passes
// });

// import {test, expect } from '@playwright/test';
// import AxeBuilder from '@axe-core/playwright';
// test('should analyze accessibility of the form and exclude the ad baner', async ({ page }) => {
//     await page.goto('https://demoqa.com/automation-practice-form');
//     const results = await new AxeBuilder({ page })
//     .include('form') // only analyze elements within the 'form'
//     .exclude('.Google-Ad') // skip elements with .Google-Ad class   
//     .analyze();
//     // log the violations for debugging/reporting
//     if (results.violations.length > 0) {
//         console.log('Accessibility violations found:');
//         results.violations.forEach(violation => {
//             console.log(`- ${violation.id}: ${violation.description}`);
//             console.log(`  Help: ${violation.helpUrl}`);
//             console.log(` Nodes:`, violation.nodes.map(node => node.html).join('\n'));
//             console.log('---');
//         });
//     }
//     //if violations are found, this test will fail and list them.
//     expect(results.violations).toEqual([]);
// });

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('should not have accessibility violations on the page', async ({ page }) => {
    await page.goto('https://example.com');
    const results = await new AxeBuilder({ page })
        .withRules(['color-contrast', 'image-alt'])
        .analyze();
    if (results.violations.length > 0) {
        console.log('Accessibility violations:', JSON.stringify(results.violations, null, 2));
    }
    expect(results.violations).toEqual([]);
});