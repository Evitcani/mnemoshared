import {AbstractQuery, ALL_ABSTRACT_QUERY} from "./base/AbstractQuery";

export interface WorldQuery extends AbstractQuery {
    discord_id?: string;
    name?: string;
    character_id?: string;
}

export const ALL_WORLD_QUERY: string[] =
    ALL_ABSTRACT_QUERY.GET().concat(["discord_id", "name", "character_id"]);