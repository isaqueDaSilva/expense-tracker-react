import { ProfileStorage } from "./profileStorage";

const accessTokenKey = "accessToken"
const profileKey = "profile"

export function setUserCredentialsOnStorage(accessToken, userProfile) {
    localStorage.setItem(accessTokenKey, accessToken);
    localStorage.setItem(profileKey, userProfile);
    ProfileStorage.getSharedInstance().setProfile(userProfile);
};

export function getAccessTokenFromLocalStorage() {
    return localStorage.getItem(accessTokenKey);
}

export function deleteUserCredentialsFromLocalStorage() {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem(profileKey);
    ProfileStorage.getSharedInstance().removeProfile();
}