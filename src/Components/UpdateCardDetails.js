import React, { useState, useEffect } from "react";

const UpdateCardDetails = () => {
  const [data, setData] = useState([]); 
  const [curVal, setCurVal] = useState({}); 
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await fetch("http://localhost:5000/cards");
        const result = await response.json();
        setCurVal(result[0] || {}); 
        console.log("api response",result)
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCardDetails();
  }, [flag]); // Re-fetch when flag changes

  // Function to update API
  const updateAPI = async (updatedData) => {
    try {
      const response = await fetch(`http://localhost:5000/cards/${updatedData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log("Update successful");
        setFlag(!flag); // Toggle flag to re-fetch data
      } else {
        console.error("Update failed");
      }
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!curVal.id) {
      alert("Error: Card ID is missing!");
      return;
    }

    const isTitleChanged = data[0]?.title !== curVal?.title;
    const updatedCard = { ...curVal, flag: isTitleChanged };

    setCurVal(updatedCard); // Update state
    updateAPI(updatedCard); // Send updated data to API
  };

  return (
    <>
      <h1>Update Card Details</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", color: "orange", paddingBottom: "20px" }}>
        <label>Card Title</label>
        <input
          type="text"
          onChange={(e) => setCurVal((prev) => ({ ...prev, title: e.target.value }))}
          value={curVal?.title || ""}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>

      {curVal?.flag && <div>Card details have been updated</div>}
    </>
  );
};

export default UpdateCardDetails;
