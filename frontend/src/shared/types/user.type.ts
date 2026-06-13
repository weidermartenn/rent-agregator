export enum Role {
    USER,
    ADMIN
}

export interface User {
    id: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    role: Role;
    city: string;
    avatarUrl: string;
    isVerified: boolean;
    veridiedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}