export interface Risk {
    id: number;
    title: string;
    description: string;
    status: 'Active' | 'Mitigated';
    createdDate: string;
    updatedDate: string;
    details?: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    role: 'Publisher' | 'Subscriber';
}

export interface Comment {
    id: number;
    author: string;
    content: string;
    timestamp: string;
}

export interface Reminder {
    id: number;
    riskId: number;
    reminderDate: string;
    note: string;
}