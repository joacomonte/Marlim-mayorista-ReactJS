const fetchSheetData = async (sheetId, range, apiKey) => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Error occurred while fetching data');
      throw new Error(await response.json());
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error occurred while fetching data: ${error.message}`);
  }
};

export default fetchSheetData;
