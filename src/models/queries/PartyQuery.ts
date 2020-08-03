import {AbstractQuery, ALL_ABSTRACT_QUERY} from "./base/AbstractQuery";

export interface PartyQuery extends AbstractQuery {
    name?: string;
    guild_id?: string;
    world_id?: string;
    character_id?: string;
}

export const ALL_PARTY_QUERY: string[] =
    ALL_ABSTRACT_QUERY.GET().concat(["name", "guild_id", "world_id", "character_id"]);