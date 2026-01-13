import { useEffect, useState } from "react";

function useGeolocation() {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        error: null,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation(l => ({ ...l, error: "Geolocation not supported" }));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            pos => {
                setLocation({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                    error: null,
                });
            },
            err => setLocation(l => ({ ...l, error: err.message }))
        );
    }, []);

    return location;
}

export default useGeolocation;