import {AbstractQuery, ALL_ABSTRACT_QUERY} from "./base/AbstractQuery";

export interface PartyFundQuery extends AbstractQuery {
    type?: "fund" | "bank" | null;
    party_id?: number;
}

export const ALL_PARTY_FUND_QUERY: string[] = ALL_ABSTRACT_QUERY.GET().concat(["type", "party_id"]);