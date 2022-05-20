import axios from 'axios';
import React, { useEffect, useState } from 'react';

export function CurrentUserLoader ({children}){
    // basic react loading logic...
    const [user, setUser] = useState(null);
    
    useEffect(()=> {
        (async ()=> {
            const response = await axios.get('/current-user')
            console.log(response, response.data)
            setUser(response.data);
        })();
    }, []);

    return (
        <>
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {user})
            }
            return child;
        })}
        </>
    )
}