export type ContactUsFormData = {
    name: string;
    email: string;
    phone: string;
    consent: boolean;
};

export type ContactUsFormErrors = {
    name?: string;
    email?: string;
    phone?: string;
    consent?: string;
};