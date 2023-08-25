import clients from "../../meta/clients.yml";

export type ClientContent = {
    readonly name: string;
    readonly logo: string;
    readonly website: string;
};

const clientMap: { [key: string]: ClientContent } = generateClientMap();

function generateClientMap(): { [key: string]: ClientContent } {
    let result: { [key: string]: ClientContent } = {};
    for (const client of clients?.clients ?? []) {
        result[client.name] = client;
    }
    return result;
}

export function getClient(name: string) {
    return clientMap[name];
}

export function listClients(): ClientContent[] {
    return clients.clients ?? [];
}
