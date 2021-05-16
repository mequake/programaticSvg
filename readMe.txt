This javascript coding example demonstrates displaying an array of
unique-looking svg images all based on / loaded from a single svg file.

Once Downloaded:

1) Install node.js if you haven't already.
2) Open a terminal window and browse to this code's root directory (where "package.json" is located).
3) Run 'npm install'
4) Run 'npm server run'
5) Open a browser to http://127.0.0.1:3000 to confirm the content displays.

You should see an array of colored circles.

These circles are all based off of the same svg image file, "./src/assets/svgs/circle.svg".

View the following files to see the code that creates and modifies them to be unique:
  1) "./src/elements/genericCircle.js" Generic circle class.
  2) "./src/collections/elementCollection.js" Element collection creates the desired 
      number of new circle class instances and modifies the svg styling for each.

