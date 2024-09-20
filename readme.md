# Aurelius - A Recovery Journey Companion

## Overview

Aurelius is a browser extension designed to support individuals on their recovery journey from various addictions. It serves as a personal tracker and motivator, helping users maintain their streak and stay committed to their goals.

## Features

1. **Multiple Addiction Tracking**: Users can track progress for various addictions simultaneously, including drugs, alcohol, gambling, and more.

2. **Streak Counter**: The extension keeps track of how long users have abstained from their selected addictions, displaying the duration in a user-friendly format.

3. **Daily Motivational Quotes**: Provides users with daily inspirational quotes to keep them motivated on their journey.

4. **Customizable Themes**: Offers multiple theme options (dark, light, ocean, forest) to suit user preferences.

5. **Privacy-Focused**: All data is stored locally on the user's device, ensuring complete privacy and data security.

6. **Support Resources**: Includes a curated list of support resources and websites for various addiction categories.

7. **Drag-and-Drop Interface**: Allows users to reorder their tracked addictions for a personalized experience.

## Technical Details

- Built as a Vue.js application
- Uses local storage for data persistence
- Implements AOS (Animate On Scroll) for smooth animations
- Responsive design for optimal viewing across different devices

## Components

1. **StartingComponent**: Initial screen for new users to begin their journey.
2. **SelectionComponent**: Allows users to select the addictions they want to track.
3. **PopupComponent**: Main interface displaying streak information and controls.
4. **OptionsComponent**: Provides access to support resources and settings.
5. **PrivacyPolicyComponent**: Outlines the extension's commitment to user privacy.

## How It Works

1. Users start their journey by clicking "Start my journey" in the StartingComponent.
2. They then select the addictions they want to track in the SelectionComponent.
3. The main PopupComponent displays the current streak for each selected addiction.
4. Users can reset streaks, adjust themes, and access support resources as needed.

## Installation and Building

To install and build Aurelius:

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/aurelius.git
   cd aurelius
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the extension:
   ```
   npm run build
   ```

4. Load the extension in your browser:
   - For Chrome: Go to `chrome://extensions/`, enable "Developer mode", click "Load unpacked", and select the `dist` folder.
   - For Firefox: Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select any file in the `dist` folder.

## Privacy and Data Handling

Aurelius is committed to user privacy:
- No personal data is collected or transmitted
- All information is stored locally on the user's device
- No cookies or tracking technologies are used

## Support and Contact

For any questions or support, please contact: romanjmerck@gmail.com

Aurelius is here to support you every step of the way on your recovery journey. Stay strong and keep pushing forward!

## Fork and Contribute

Aurelius is an ongoing development project in its early phase. We welcome contributions from the community to help improve and expand the application. Here's how you can get involved:

- **Fork the Repository**: Feel free to fork the repository and experiment with your own ideas and improvements.
- **Submit Pull Requests**: If you've made changes that you believe would benefit the project, please submit a pull request for review.
- **Report Issues**: If you encounter any bugs or have suggestions for new features, please open an issue in the repository.
- **Contribute to Discussions**: Join ongoing discussions about the project's direction and future features.

Your contributions, whether big or small, are valuable to the growth and success of Aurelius. Let's work together to create a powerful tool for recovery support!

## Technical Debt

As Aurelius started with fewer features and gradually expanded, it has accumulated some technical debt. One significant area of technical debt is the lack of a router view in the application architecture.

Initially, the app was designed with a simpler structure, using conditional rendering to switch between different components (StartingComponent, SelectionComponent, PopupComponent, etc.). While this approach worked for the initial scope of the project, it has led to a less scalable and maintainable codebase as more features were added.

Implementing a router view would provide several benefits:
1. Improved navigation and state management
2. Better URL-based navigation, allowing for bookmarking and sharing specific views
3. Cleaner separation of concerns between components
4. Easier addition of new features and views in the future
5. More standardized Vue.js application structure

Refactoring the application to use a router view is a priority for future development. This will involve restructuring the application's component hierarchy, implementing vue-router, and updating the navigation logic throughout the app. While this refactoring process will require significant effort, it will greatly improve the app's maintainability and scalability in the long run.
