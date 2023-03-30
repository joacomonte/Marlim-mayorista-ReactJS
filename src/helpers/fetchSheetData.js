async function fetchSheetData(sheetId, range, apiKey) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from Google Sheets API. Status: ${response.status}.`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error occurred while fetching data: ${error.message}`);
    throw error;
  }
}

export default fetchSheetData;
