# Ember Routing Practice

## Objectives

* Define routes that render the correct temples. 
* Define a nested route that renders a nested template.
* Use Handlebars to render the links to different pages. 

## Instructions

You'll be building out the following routes to render templates:

* `/` - the homepage
* `/about` - the about page
* `/hello` - a page that says hello to you
* `/contributors/sophie` - a nested route that renders a nested template that tells you all about one of the contributors to this project (me! hi guys.)

* First, define the above routes in `app/router.js`. The `/sophie` route should be nested unded the `/contributors` route. 
* Once you have your router defined, you can move on to your templates. 
* The `application.hbs` template should have a navigation bar. The list items for the nav bar can be found inside the following element in that template:

```html
<ul class="nav navbar-nav">
```

You MUST fill in the `<li>`s we provided for you with the correct links. Don't make your own nav bar. The tests are looking for selectors in this navbar. 

Fill our the navbar `<li>`s with a link to the about page and a link to the hello page. **The first <li> should contains the link to the hello page, the second `<li>` should contain the link to the about page**. 

* Create a `app/templates/hello.hbs` that contains the text `"Hello!"`, in an `<h4>`. 
* Create a `app/templates/about.hbs` that contains the word `"About"`, in an `<h4>`. 
* Create a `app/templates/contributors/sophie.hbs` that contains the text: `Sophie is a contributor to this project.` in `<p>` tags. 


