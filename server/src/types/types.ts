export type dataTypes = {
    id: string,
    title: string,
    description: string
}

export interface CustomError extends Error {
    statusCode?: number;
} 