import { useState, useEffect } from 'react';
import axios from 'axios';

///THE MAIN PAGE///
const MainPage = () => {
    //Fields
    const API_URL = "/api/test/";
    let _initialized = false; //To stop StrictMode calling useEffect twice

    //States
    const [message, setMessage] = useState("No message recieved.")

    //Start
    useEffect(() => {
        if (_initialized) return;
        async function _getMessage(){
            try {
                const result = await axios.get(API_URL);
                setMessage(result.data.message);
            }
            catch(error) {
                setMessage(`Sorry, an error was recieved: ${error.message}`);
            }
        }
        _getMessage();
        _initialized = true;
    }, []);

    //Render
    return (
        <div id="main-page">
            <p>{ message }</p>
        </div>
    )
}

///EXPORT///
export default MainPage;