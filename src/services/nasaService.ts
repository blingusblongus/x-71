class NasaService {
    private _baseUrl = "https://api.nasa.gov/neo/rest/v1"
    private _apiKey: string;

    constructor(apiKey: string | undefined) {
        if (!apiKey) throw Error("NASA_API_KEY must be provided");

        this._apiKey = apiKey;
    }

    async feed(startDate: string, endDate: string) {
        try {
            const url = this._baseUrl + `/feed?start_date=${startDate}&end_date=${endDate}&api_key=${this._apiKey}`
            const res = await fetch(url);
            return res.json();
        } catch (err) {
            throw new Error("Failed to fetch from NASA API");
        }
    }
}

export default new NasaService(process.env.NASA_API_KEY);
