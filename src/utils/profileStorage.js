export class ProfileStorage {
    static #shared = null;
    #userProfile = null;

    static getSharedInstance() {
        if (!ProfileStorage.#shared) {
            // Create a new instance only if one doesn't exist
            ProfileStorage.#shared = new ProfileStorage();
        }

        return ProfileStorage.#shared; // Return the single instance
    }

    getProfile() {
        return this.#userProfile;
    };

    setProfile(profile) {
        this.#userProfile = profile;
    };

    removeProfile() {
        this.#userProfile = null;
    };

    constructor() {
        if (ProfileStorage.#shared) {
            throw new Error("Not possible to create this class directly. Use the ProfileStorage.getInstance() instead.");
        }
    }
}