# X-71 Asteroid Interceptor

A simple API to fetch near-miss asteroid data from NASA.

## Reqs

- [ ] Accept Request with following data (assume always kilometers):
```json
    {
        "dateStart": "2019-01-01",
        "dateEnd": "2019-01-07",
        "within": {
            "value": 9000000,
            "units": "kilometers"
        }
    }
```

- [ ] Query [NASA NeoWS API](https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY) to get Asteroids within the specified distance/date range.
- [ ] Respond with list of asteroid names:
```json
{
    "asteroids": [
        "(2017 MZ)"
    ]
}
```
- [ ] Handle Errors with at least `{"error": true}`
- [ ] Update docs
