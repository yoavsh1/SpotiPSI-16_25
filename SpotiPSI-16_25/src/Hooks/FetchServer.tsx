import { useEffect, useState } from "react"
import type { Playlist, Song } from '../components/Types.tsx'

const BASEURL = "http://127.0.0.1:5001/api/"
const FAVORITES = "favorites"
const PLAYLISTS = "playlists"
const SONGS = "songs"


 export const useFetchServerSongs = () => {
    const [data, setData] = useState<Song[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        fetchSongs<Song[]>(setIsLoading, setError, setData, SONGS)
    }, [])

    return { data, setData , isLoading, error }
}
     
export const useFetchServerFavorites = () => {
    const [data, setData] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        fetchSongs<string[]>(setIsLoading, setError, setData, FAVORITES)
    }, [])
    return { data, isLoading, error, setData }
}

export const useFetchServerPlaylists = () => {
    const [data, setData] = useState<Playlist[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        fetchSongs<Playlist[]>(setIsLoading, setError, setData, PLAYLISTS)
    }, [])

    return { data, isLoading, error, setData, setIsLoading, setError }
}

export async function fetchSongs<T>(setIsLoading: (bool: boolean) => void, setError: (str: string) => void, setData: (data: T) => void, url: string) {
    setIsLoading(true);
    try {
        const response = await fetch(`${BASEURL}/${url}`)
        const data = await response.json() as T;
        setData(data);
        return data
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

