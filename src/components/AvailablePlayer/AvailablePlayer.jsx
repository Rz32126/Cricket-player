import { useEffect } from "react";
import { useState } from "react";


const AvailablePlayer = () => {
    const [players, setPlayer] = useState([]);

    useEffect( () => {
        fetch('main.json')
        .then(res => res.json())
        .then(data => setPlayer(data.players))
        
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default AvailablePlayer;