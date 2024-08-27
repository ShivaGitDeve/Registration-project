import { useEffect } from "react";

const AdminUsers = () => {

    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/admin/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            console.log(`users ${data}`);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUsersData();
    })

    return (
        <>

        </>
    )
};

export default AdminUsers;