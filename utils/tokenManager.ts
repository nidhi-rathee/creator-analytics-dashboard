export function createTokenManager() {
    let secureToken: string | null = null;

    return {
        setToken: (newToken: string) => {
            secureToken = newToken;
            console.log("Token securely stored inside closure scope!");
        },

        getToken: () => {
           return  secureToken;
        },

        clearToken: () => {
            secureToken = null;
            console.log("Token cleared from closure scope!");

        }
    }


}

const manager = createTokenManager();
manager.setToken("my-secret-123");