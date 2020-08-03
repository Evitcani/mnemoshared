import {AbstractQuery, ALL_ABSTRACT_QUERY} from "./base/AbstractQuery";

export interface DateQuery extends AbstractQuery {
    within_date_day?: number;
    within_date_month?: number;
    within_date_year?: number;
    within_days_of_date?: number;
}

export const ALL_DATE_QUERY: string[] =
    ALL_ABSTRACT_QUERY.GET().concat(["within_days_of_date", "within_date_year", "within_date_month", "within_date_day"]);