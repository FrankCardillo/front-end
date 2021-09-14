# The Front End of the App

## Running Locally

- This app will run locally on port 3000. Just run `npm i` and then `npm run start` to get it going

## Testing

- There is no testing as you can see. While TDD is important, in this case I prioritized delivering an MVP within a time box. For the front end I'd love to help grow a test suite that checks atomic behaviors of the various components. Not so much, "does this component return a `<div>`" as "does this function within the component perform the action I expect in a consistent and predictable manner" and "are my use cases for the component covered (including edge cases)."

## Improvements worth making

### Git pre-commit hook for linting

- This goes equally for the API, but I'll just note it here. If I had more time I'd like to enforce whatever style guide my team decides on at the commit stage. Thereby making the devs fix any inconsistencies before the code makes its way to remote.

### Git pre-push hook for testing

- This goes equally for the API, but I'll just note it here. If I had more time I'd like to run the test suite against a feature branch before it gets pushed to remote. Best to catch any obvious failures early before we waste time deploying and having stakeholders/QA test in a sandbox env, or worse yet before the code makes its way to prod. This, of course, relies on a robust test suite which is absent here.

### Git branch protections

- Once again, also applies to the API. Our master branch should have protections in place that require passing reviews from 1 or more (hopefully more) teammates before PRs can be merged into it.

### Using a more fleshed out framework rather than barebones create react app

- I ended up using create-react-app for the front end for much the same reason I used express-generator for the back end. And in much the same manner I could have used something like Next given more time and/or a true need for production readiness.

### Error handling

- Right now errors are not being sent to the client and the client is not doing anything to alert users of what went wrong and how to rectify the situation. This is obviously quite bad. Users need to know. Further, we could set up logging with alerts to let us know via pager duty or what-have-you when we've made a bad prod release and broken an endpoint (or more).

### Styling/UX

- I'm good at following a mock or a brand/style guide and making my apps conform beautifully to someone more artistic's vision. Even if I had had a lot more time to work on this, I would probably not have made something significantly more beautiful on my own. So, in an ideal world I would make this pleasant to look at and easy to use in collaboration with a UX team. But hey, plain as it is at least it's already responsive!
