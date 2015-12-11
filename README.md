# Ember-reporting-dashboard

Example reporting app built with Ember that uses GitHub's public API.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## GitHub APIs that power this app

* [GET /repos/:owner/:repo/stats/commit_activity](https://developer.github.com/v3/repos/statistics/#commit-activity)
* [GET /repos/:owner/:repo/commits](https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository)

## Project Structure

    /
    ├── app
    │   ├── pods                     - ember pods structure
    │   │   ├── application          - main starting point and global error handling
    │   │   ├── components           - reusable components
    │   │   ├── error                - error template
    │   │   ├── index                - index route
    │   │   ├── loading              - loading template
    │   │   ├── report-comparison    - complex report w/ multi-select element
    │   │   └── report-details       - basic report w/ single select element
    │   │
    │   ├── services                 - reusable modules that can be injected into other objects
    │   ├── styles                   - css styles
    │   └── themes                   - highcharts theme
    │
    ├── config                       - environment config (development, test, production)
    ├── dist                         - static files for deployment (created by `ember build`)
    ├── public                       - static assets (images, robots.txt)
    ├── server                       - express.js mock api endpoints
    └── tests                        - unit/integration tests
