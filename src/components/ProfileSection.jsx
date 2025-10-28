import { Button } from "./Button";
import { ProfileStorage } from "../utils/profileStorage"
import { LogOut } from "lucide-react";
import { deleteUserCredentialsFromLocalStorage } from "../utils/storageForCredentials";
import { signout } from "../utils/auth";
import { useState } from "react";
import "../index.css";

export function ProfileSection({setState, onSignoutSuccessed}) {
    const username = ProfileStorage.getSharedInstance().getProfile().username;
    const [isLoading, setIsLoading] = useState(false)

    const onSignout = async () => {
        setIsLoading(true);
        setState(isLoading)
        let response;

        try {
            response = await signout();
            deleteUserCredentialsFromLocalStorage();
        } catch(error) {
            alert(error);
        } finally {
            setIsLoading(false)
            setState(isLoading);
        }

        if (response) {
            onSignoutSuccessed();
        }
    }

    return (
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Welcome, {username}!</h2>
            <Button variant="outline" size="sm" onClick={onSignout} isButtonDisabled={isLoading} >
              <LogOut className="w-4 h-4 inline-block mr-1" />
              Logout
            </Button>
        </div>
    )
}