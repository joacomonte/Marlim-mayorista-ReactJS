const axios = require('axios');

exports.handler = async function(event, context) {
  const { sheetId, range, apiKey } = JSON.parse(event.body);
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
