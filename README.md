# Weather Api

This api was made due a participation in El Passion workshop. Thank you for that experience!

- The application issues an endpoint `#GET / current_weather` which takes the parameters` lat`, `lon` and` alternateSource: boolean`.

- API in the above endpoint returns the current weather data for the given coordinates:

* temperature,
* pressure
* humidity,
* wind speed
* information about the data source used.

- Depending on the value of `alternateSource`, the application uses 2 different data sources. In case of false it is Weatherbit, if it's true - Visual Crossing Weather.

## Word about the tests

APIs that I use every hour or even more often return different values. So I couldn't run tests that examine these specific values, because each time I would have to check what api returns first. So I decided to check if the response object has properties, because if it has it means that the response is correct.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# test
$ npm run test

# test watch
$ npm run test:watch
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
