# clients-hluz

## Project setup
```
npm install

npm install json-server -g
```

### Compiles and hot-reloads for development
```
nom rjson-server-serve
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Details:

## Architecture:
The application is divided into an architecture represented by views, containers, services and components.

- Views do representational work, they have no logic, they represent everything that containers manipulate
- Containers contain the application logic, fetching data from services and passing it to components after modulation.
- The services are in charge of obtaining the data from the api, in this case json-server has been used to simulate a server, as well as that axios has been used to obtain that data

- Components represent each of the parts of the application, manipulating small parts of it

## Execution:
Please make sure that you have everything installed, to do that execute:
`npm install` and `npm install json-server -g`, the first option is to install all project dependencies and the second is to install the json-server to create a virtual server using jsons, to simulate that we are used a real api.

The dummy server is running on port 3000, and its url is `localhost:3000`, make sure in your case it is the same because we need to run it, if it is not the case see what port it is and go to service api and change that port.

## Vuex
The app use all data from the dummy server, so we dont need vuex. It is a query application and does not need to store any data, so it has not been used.

## Test
In the application there are several tests, they are unit tests, to execute them you need the command npm run test: unit

## Styles
Vuetify has been used, therefore most of the styles are their own, but even so some modifications have been added and some global styles have been saved in the `styles.scss` file that is inside `assets/scss`.
