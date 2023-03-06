const fetchSheetData = async (sheetID, range, apiKey) => {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`
    );
    const data = await response.json();
    console.log("has been fetched")
    console.log(data)
    return data;
  };
  
  export default fetchSheetData;