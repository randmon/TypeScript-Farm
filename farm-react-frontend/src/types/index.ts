export interface Animal {
    name: string;
    type: string;
    age: number;
    image: string;
}

export interface Response {
    status: 'error' | 'success';
    animal?: Animal;
    errorMessage?: string;
}

export interface StatusMessage {
    message: string;
    type: 'error' | 'success';
}