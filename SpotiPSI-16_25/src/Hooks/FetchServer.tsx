import { useEffect, useState } from "react"
import type { Song } from "../components/Types.tsx"

 export const useFetchServerSongs = () => {
    const [data, setData] = useState<Song[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const fetchSongs = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("http://127.0.0.1:5001/api/songs")
                const data = await response.json();
                setData(data);
            }
            catch (error) {
                setError("Something went worng");
                console.error(error);
                return;
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchSongs()
    }, [])

    return { data, setData , isLoading, error }
}




export const useFetchServerFavorites = () => {
    const [data, setData] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const fetchSongs = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("http://127.0.0.1:5001/api/favorites")
                const data = await response.json();
                setData(data);
            }
            catch (error) {
                setError("Something went worng");
                console.error(error);
                return;
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchSongs()
    }, [])

    return { data, setData , isLoading, error }
}
