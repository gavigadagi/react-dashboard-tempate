import React, { useState} from 'react'
import useLocalStorageState from '../../../hooks/useLocalStorageState';
function DisplayLocalStorageData () {
    const [userAge, setUserAge] = useLocalStorageState("age",20);
    return (
        <div>
            <h1>{userAge}</h1>
    <button onClick={() => setUserAge(userAge + 1)}>Increment</button>
    <button onClick={() => setUserAge(userAge - 1)}>Decrement</button>
        </div>
    )
}
export default DisplayLocalStorageData;