describe('#GET example', () => {
  it('returns weather data from Weatherbit', () => {
    // given
    apiIsAvailable();

    //when
    const request = getWeatherData(false);

    //then
    resultIs(request, {
      status: 'ok',
      temperature: {
        value: 3.3,
        unit: 'Celsius',
      },
      humidity: {
        value: 44.6334,
        unit: null,
      },
      pressure: {
        value: 1014.04,
        unit: 'millibars',
      },
      windSpeed: {
        value: 2.08848,
        unit: 'kilometer per hour ',
      },
      source: 'Weatherbit',
    });
  });
  it('returns weather data from Visual Crossing Weather', () => {
    // given
    apiIsAvailable();

    //when
    const request = getWeatherData(true);

    //then
    resultIs(request, {
      status: 'ok',
      temperature: {
        value: 0.6,
        unit: 'Celsius',
      },
      humidity: {
        value: 56.3,
        unit: null,
      },
      pressure: {
        value: 1025.5,
        unit: 'millibars',
      },
      windSpeed: {
        value: 5.4,
        unit: 'kilometer per hour ',
      },
      source: 'Visual Crossing Weather',
    });
  });
});

const requestBody = {
  lat: '52.229675',
  lon: '21.012230',
};

function apiIsAvailable() {}

function getWeatherData(
  alternateSource: boolean,
): Cypress.Chainable<Cypress.Response<any>> {
  return cy.request('GET', `http://localhost:3333/current_weather`, {
    ...requestBody,
    alternateSource,
  });
}

async function resultIs(
  request: Cypress.Chainable<Cypress.Response<any>>,
  result: {
    status: string;
    temperature: {
      value: number;
      unit: string;
    };
    humidity: {
      value: number;
      unit: null;
    };
    pressure: {
      value: number;
      unit: string;
    };
    windSpeed: {
      value: number;
      unit: string;
    };
    source: string;
  },
) {
  request.should((response) => {
    expect(response.body).to.eql(result);
  });
}
