describe('#GET example', () => {
  const resultKeys = [
    'status',
    'temperature',
    'humidity',
    'pressure',
    'windSpeed',
    'source',
  ];

  it('returns weather data from Weatherbit', () => {
    // given
    apiIsAvailable();

    //when
    const request = getWeatherData(false);

    //then

    resultIs(request, resultKeys);
  });
  it('returns weather data from Visual Crossing Weather', () => {
    // given
    apiIsAvailable();

    //when
    const request = getWeatherData(true);

    //then
    resultIs(request, resultKeys);
  });
});

const coordinates = {
  lat: '52.229675',
  lon: '21.012230',
};

function apiIsAvailable() {}

function getWeatherData(
  alternateSource: boolean,
): Cypress.Chainable<Cypress.Response<any>> {
  return cy.request('GET', `http://localhost:3333/current_weather`, {
    ...coordinates,
    alternateSource,
  });
}

async function resultIs(
  request: Cypress.Chainable<Cypress.Response<any>>,
  resultKeys: string[],
) {
  request.should((response) => {
    expect(response.body).to.have.keys(resultKeys);
  });
}
