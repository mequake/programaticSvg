This javascript coding example demonstrates displaying an array of
unique-looking svg images all based on a single svg object.

Once Downloaded:

1) Install node.js if you haven't already.
2) Open a terminal window and browse to this code's root directory (where "package.json" is located).
3) Run 'npm install'
4) Run 'npm server run'
5) Open a browser to http://127.0.0.1:3000 to confirm the content displays.

You should see an array of colored circles.

These circles were all created from the same svg model (which has a black fill)
and, once created, had their fill color changed by the requester, creating six
unique-looking images in the browser.

To jump into the specific comments for this example view the following files:
  1) "./src/elements/genericCircle.js" Generic circle class.
  2) "./src/collections/elementCollection.js" Element collection creates the desired 
      number of new circle class instances and modifies the svg styling for each.

For all comments, including those outside the scope of this example (modifying SVGS),
start reviewing at "index.js" and follow the comments. 

General Information:
This example uses a standard set of packages that I use for small apps like this,
and supports hot updates, so if you make changes to the code you don't have to
relaunch the server - just save the file, wait a second or two, and refresh
your browser / retry your request.