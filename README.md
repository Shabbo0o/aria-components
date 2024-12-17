# Accessible ARIA Modal and Navigation Menu
## Table of Contents
- Project Overview
- Features
- Code Structure
- Technologies Used
- Accessibility Considerations

This project implements an accessible navigation menu and two types of modal dialogs:

A custom modal using ARIA roles.
A native HTML `<dialog>` modal.
The goal is to improve web accessibility and ensure `user`s of assistive technologies, such as screen readers, can interact with the application seamlessly.

## Features
### Accessible Navigation Menu:

Keyboard navigation support using the Tab key.
ARIA attributes (aria-expanded and aria-controls) ensure screen readers announce menu states.
Close the menu by clicking outside of it.
Custom Modal (ARIA-based):

Uses ARIA roles like role="dialog" and aria-modal="true".
Closes on pressing the Escape key or clicking the overlay.
Focus management ensures accessibility.
HTML `<dialog>` Modal:

Leverages the native `<dialog>` element for enhanced simplicity.
Closes on pressing the Escape key.

## Code Structure
The project includes:

- HTML: Markup for the menu, modals, and buttons.
- CSS: Styling for the layout, modals, and menu.
- JavaScript: Logic for opening/closing modals and managing the navigation menu.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- ARIA (Accessible Rich Internet Applications)

## Accessibility Considerations

1. **Custom Modal**:
   - `role="dialog"`: Announces the modal as a dialog for screen readers.
   - `aria-labelledby`: Links the modal heading for better screen reader context.
   - `aria-modal="true"`: Ensures focus remains within the modal when open.

2. **Navigation Menu**:
   - `aria-expanded`: Indicates whether the menu is expanded or collapsed.
   - Keyboard navigation allows seamless usability without a mouse.

3. **Focus Management**:
   - Focus is moved to the **close button** when the modal opens.
   - Focus returns to the triggering button when the modal closes.
