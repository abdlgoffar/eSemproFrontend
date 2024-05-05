import axios from "axios";

export async function fetchUsersByRole(role, signal) {
    const authToken = localStorage.getItem("Authentication-token");
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/${role}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${authToken}`
            },
            signal: signal // Add signal to axios request configuration
        });
        return response.data;
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log('Request canceled by the user.');
        } else {
            console.error('Error fetching users by role:', error);
        }
        return [];
    }
}
