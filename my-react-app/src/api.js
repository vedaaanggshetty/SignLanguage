const API_URL = "http://127.0.0.1:5000"; // Flask backend URL

export const fetchWelcomeMessage = async () => {
    try {
        const response = await fetch(`${API_URL}/`); 
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return "Error fetching data";
    }
};
