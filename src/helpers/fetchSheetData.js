
  const fetchSheetData = async (sheetId, range, apiKey) => {

    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        console.log("Response not ok error:", await response.json());
      }
      else {
        console.log("Response ok: ", response);
        const data = await response.json();
        return data;
      }
    } 
    catch (error) {
      console.log("catch error: ", error.message);
    }
  };
  
  export default fetchSheetData;