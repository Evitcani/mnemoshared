import {AbstractQuery, ALL_ABSTRACT_QUERY} from "./base/AbstractQuery";

export interface DiscordIDQuery extends AbstractQuery {
    character_ids?: string | string[];
    character_id?: string;
    world_id?: string;
}

export const ALL_DISCORD_ID_QUERY: string[] = ALL_ABSTRACT_QUERY.GET().concat(["world_id", "character_id", "character_ids"]);