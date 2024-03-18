const axios = require('axios');

//   const { sheetId, range, apiKey } = JSON.parse(event.body);
exports.handler = async function (event, context) {
  const { sheetId, range } = JSON.parse(event.body);
  const apiKey = process.env.VITE_API_KEY;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
