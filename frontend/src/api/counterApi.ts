import type { CounterRequest, CounterResponse } from "../types/counter";
import type { ErrorResponse } from "../types/error";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function incrementCounter(data: CounterRequest): Promise<CounterResponse> {
    const response = await fetch(`${BASE_URL}/api/counter/increment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Counter": "1"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        let error : ErrorResponse | null = null;

        try {
            error = await response.json();
        } catch {
            // Sem JSON
        }

        throw new Error(error?.message ?? "Erro inesperado");
    }

    return response.json();
}