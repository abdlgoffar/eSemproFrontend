import axios from "axios";
import { selfPath } from "../utils/constants";
import { useState } from "react";



function Secure(props) {

    const [authorized, setAuthorized] = useState(false)

    axios.get("http://127.0.0.1:8000/api/users/get", {
        headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localStorage.getItem("Authentication-token")}` }
    })
        .then((response) => {
            if (response.status === 200) {
                const role = response.data.data.role;
                const identity = window.location.pathname.split("/");
                for (let i = 0; i < selfPath().length; i++) {
                    if (selfPath()[i] === window.location.pathname && role === identity[1]) {
                        setAuthorized(true);
                    }
                }
            }
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response);
            } else if (error.request) {
            } else {
                console.log(error);
            }
        });

    if (authorized === true) {
        return props.children;
    }

}


export default Secure;