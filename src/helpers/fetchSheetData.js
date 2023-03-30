// const fetchSheetData = async (sheetID, range, apiKey) => {
//     const response = await fetch(
//       `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`
//     );
//     const data = await response.json();
//     console.log("FetchSheetData() has been called")
//     return data;
//   };
  
//   export default fetchSheetData;


  const fetchSheetData = async (sheetId, range, apiKey) => {

    try {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        console.log("res null?",response)
        throw new Error(`Error fetching sheet data: ${response.status} ${response.statusText}`);
      }
      else {
        console.log("res no null?",response)
        const data = await response.json();
        return data;
      }
    } 

    catch (error) {
      console.log("fetch error", error)
      throw new Error(`Error fetching sheet data: ${error.message}`);
    }
  };
  
  export default fetchSheetData;