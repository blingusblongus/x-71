import { NASAResponse } from "../services/nasaService";

export const mapAsteroidNames = (json: NASAResponse, distanceKm: number) => {
    const names = [];

    // Iterate through returned NEOs (grouped by day)
    for (const day in json.near_earth_objects) {
        const nearMisses = json.near_earth_objects[day];

        for (const neo of nearMisses) {
            // search each neo's near miss events for event within distance
            if (neo.close_approach_data.findIndex((miss) => {
                // TODO: Handle case where this doesn't resolve to a number?
                return Number(miss.miss_distance.kilometers) <= distanceKm;
            }) > -1) {
                console.log(JSON.stringify(neo, null, 2))
                names.push(neo.name);
            }
        }
    }

    return names;
}
