import { contactInfo } from "@/data/contactInfo"

type Adress = {
    city: string,
    state: string,
    street: string,
    number: string,
    complement: string,
}

export function formatAddress() {
    const { city, state, street, number, complement }: Adress = contactInfo.address;
    return `
        ${street}, ${number} - ${complement}
        ${city} - ${state}

    `
}