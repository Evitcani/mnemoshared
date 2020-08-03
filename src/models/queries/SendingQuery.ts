import {AbstractQuery, ALL_ABSTRACT_QUERY} from "./base/AbstractQuery";

export interface SendingQuery extends AbstractQuery {
    world_id?: string;
    to_character_id?: string;
    from_character_id?: string;
}

export const ALL_SENDING_QUERY: string[] =
    ALL_ABSTRACT_QUERY.GET().concat(["world_id", "to_character_id", "from_character_id"]);