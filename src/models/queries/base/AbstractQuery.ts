export interface AbstractQuery {
    ids?: string | string[];
    id?: string;
    limit?: number;
    skip?: number;
}

export class ALL_ABSTRACT_QUERY {
    static GET(): string[] {
        return ["ids", "id", "limit", "skip"];
    }
}