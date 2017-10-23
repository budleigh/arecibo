# arecibo
SPA/webapp template with front-end and back-end boilerplate using Flask, Pewee and Vue

- Uses a Flask app as an initial web backend and for an API module. The Flask app serves the root page, where Vue takes over and interacts with the app's API.
- The backend is set up with crude User models and authentication. The frontend is set up to interact with the auth backend.
- The Vue frontend is configured with vue-router and vuex state management.
- Future plans dropped in the todo file at root

# use
- Requires Python >=3.6, Node >= 8.6

1. Clone repo
2. ```virtualenv a-env```
3. ```source a-env/bin/activate```
4. ```pip install```
5. ```yarn```

At this point, webpack will build the bundle and the app is ready to run. At the moment, there is no unified way to run the webpack watcher and the Flask backend. I'm running the Flask backend in a PyCharm debugger and keeping the webpack watcher in a terminal for right now.
