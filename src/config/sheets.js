export default {
    // Client ID and API key from the Developer Console
    CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    API_KEY: process.env.REACT_APP_API_KEY,

    // Array of API discovery doc URLs for APIs used by the app
    DISCOVERY_DOCS: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4",
    ],

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    SCOPES: "https://www.googleapis.com/auth/spreadsheets.readonly",

    // optional params and settings are detailed here:
    // https://www.steegle.com/google-sites/how-to/insert-websites-apps-scripts-and-gadgets/embed-google-sheet-range
    BRACKET_IFRAME_URL:
        `https://docs.google.com/spreadsheets/d/e/${process.env.REACT_APP_PUB_SHEET_ID}/pubhtml` +
        `?gid=${1259170700}` + // sheet id
        `&range=${"C4:W20"}` + // range to display
        `&single=${true}` + // only display 1 sheet
        `&widget=${false}` + // hide sheet name
        `&chrome=${false}` + // hide spreadsheet name
        `&headers=${false}`, // hide spreadsheet name
};
