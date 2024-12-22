export type PersonList = {
    first: string,
    last: string,
}

export type Name = {
    first: PersonList["first"],
    last: PersonList["last"],
    abc: {
        data: {
            name: string
        }
    }[];
}

export type PersonService = {
    name: Name,
}