import { useEffect } from "react";

const getServices = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/data/services", {
            method: "GET",
        })

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(`service frontend erroR: ${error}`);
    }

}

useEffect(() => {
    getServices()
})