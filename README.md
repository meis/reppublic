# Reppublic
Example app using github api to view user's public repositories.                                                                              
You can see it online at http://meis.github.io/reppublic/ (Try with your own user going to /reppublic/[your_user])

# Download

You can download Reppublic using Git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git):
```
git clone https://github.com/meis/reppublic/
```

# Try in your computer

To try this app in your computer you have to download it. Once in your computer you can simply open index.html in any browser.

# Develop

If you want to explore the code and make modifications, you need to install all dependencies:
* node.js & npm - https://github.com/joyent/node/wiki/Installation
* gulp - `npm install --global gulp` 
* Once you have npm and gulp, run `gulp install` to install the developing dependencies.

Now you can run `npm test` to run all the tests or `npm serve` to run a development server.

You also can run `gulp watch` to run the tests, rebuild the app and restart the server on every change.
