import { useEffect, useState } from 'react';

const useFetchData = (fetch) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch();
                setData(res);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                setError(e);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return { isLoading, data, error };
};

export default useFetchData;
