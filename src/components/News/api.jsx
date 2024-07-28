import data from "./data.json"; // Assuming data.json is in the same directory

export const fetchAcademies = async () => {
  try {
    // Simulating API fetch delay with setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.academies);
      }, 1000); // Adjust timeout as needed (simulating delay)
    });
  } catch (error) {
    // console.error("Error fetching academies:", error);
    throw error;
  }
};
