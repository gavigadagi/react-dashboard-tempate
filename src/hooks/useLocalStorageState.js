import { useState, useEffect } from "react";


function useLocalStorageState(key, defaultValue) {

    const [state, setState] = useState(() => {
        let value;

        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultValue)
            );
        } catch (e) {
            value = defaultValue;
        }
        return value;
    })

    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state])

    return { state, setState}
}

export default useLocalStorageState;