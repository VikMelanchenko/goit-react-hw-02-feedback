The task is to create an application for collecting statistics. There are only three types of feedback: good, neutral, and bad.

Task 1
The app displays the number of collected reviews for each category. When the page is refreshed, the application does not save feedback statistics between different sessions.

Created Components

- FeedbackOptions
- Statistics
- Notification

Task 2
Added display of the total number of collected reviews from all categories and the percentage of positive reviews.
For calculations, methods such as countTotalFeedback () and countPositiveFeedbackPercentage () were created, which calculate these values based on the data in the state (calculated data).

Task 3
Application state remains in the root <App> component.
A separate component <Statistics good = {} neutral = {} bad = {} total = {} positivePercentage = {}> has been created for displaying statistics.
A block of buttons has been created for the <FeedbackOptions options = {} onLeaveFeedback = {}> component.
The component <Section title = " "> has been created for displaying a section with a title and children.
