
  const fetchSheetData = async (sheetId, range, apiKey) => {

    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        console.log("res not ok: ",response);
      }
      else {
        console.log("res ok",response)
        const data = await response.json();
        return data;
      }
    } 

    catch (error) {
      console.log("catch error: ", error)
    }
  };
  
  export default fetchSheetData;