import ReactModal from "react-modal";
import { useState } from "react";

const ModalComponent = (prop) => {
  const [options, setOptions] = useState({
    Disaster_Type: "",
    Support_days: "",
  });
  const handleInputChange = (field, value) => {
    setOptions((prevsurveyData) => ({
      ...prevsurveyData,
      [field]: value,
    }));
  };
  const HandleSubmit = () => {
    // console.log(options)
    prop.callBackfunc(options);
  };

  return (
    <ReactModal
      isOpen={prop.isOpen}
      onRequestClose={prop.onRequestClose}
      style={{
        content: {
          width: "90%",
          maxWidth: "500px",
          height: "300px",
          background: "white",
          opacity: 1,
          display: "flex",
          flexDirection: "column",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex justify-between items-center w-full">
            <label className="w-full  lg:w-[60%]  text-xl text-gray-700  mb-2 p-2 ">Disaster Type</label>
          <select
            value={options.Disaster_Type}
            onChange={(e) => handleInputChange("Disaster_Type", e.target.value)}
            className="w-full lg:w-[40%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 "
          >
            <option value="">Select an option</option>
            <option value="Flood">Floods</option>
            <option value="Pandemic">Pandemic</option>
            <option value="Earthquakes">Earthquakes</option>
            {/* Add other options here */}
          </select>
          {/* Display selected option */}
          {/*  <p>Selected option: {options.Disaster_Type}</p> */}
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="w-full  lg:w-[60%]  text-xl text-gray-700  mb-2 p-2 ">
            Enter number of days to support
          </div>
          {/* Second input field */}
          <input
            type="number"
            id="Support_days"
            name="Support_days"
            value={options.Support_days}
            placeholder="enter number"
            required
            className="w-full lg:w-[40%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 "
            onChange={(e) => handleInputChange("Support_days", e.target.value)}
          />
        </div>
        <button
          className="px-4 py-4 mt-4 w-32 text-sm font-semibold text-white bg-[#2979B7] rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          onClick={HandleSubmit}
        >
          Submit
        </button>
      </div>
    </ReactModal>
  );
};

export default ModalComponent;
