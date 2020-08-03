import {AbstractQuery, ALL_ABSTRACT_QUERY} from "./base/AbstractQuery";

export interface CharacterQuery extends AbstractQuery {
    name?: string;
    discord_id?: string;
    world_id?: string;
    is_npc?: boolean | null;
}

export const ALL_CHARACTER_QUERY: string[] =
    ALL_ABSTRACT_QUERY.GET().concat(["name", "discord_id", "world_id", "is_npc"]);