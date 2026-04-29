import { useEffect, useState } from "react";
import { incrementCounter } from "../api/counterApi";

const STORAGE_KEY = "counter_value";

export function useCounter() {
    const [count, setCount] = useState<number>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? Number(stored) : 0;
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, count.toString());
    }, [count]);

    const increment = async () => {
        if (loading) return;

        try {
            setLoading(true);
            setError(null);

            const result = await incrementCounter({ value: count });
            setCount(result.value);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Erro desconhecido");
            }
        } finally {
            setLoading(false);
        }
    }

    return { count, loading, error, increment };
}