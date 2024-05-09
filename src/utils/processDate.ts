type DateResult = {
    valid: boolean,
    dateStr?: string,
    error?: any;
}
/** Checks for invalid date, and returns an object with valid status and a standardized date string */
export const processDate = (inputStr: string): DateResult => {
    const date = new Date(inputStr);

    if (!isFinite(date.getTime())) {
        return {
            valid: false,
            error: "Invalid Date: " + inputStr,
        }
    }
    return {
        valid: true,
        dateStr: date.toISOString(),
    }

}
