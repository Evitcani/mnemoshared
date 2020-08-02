export declare class StringUtility {
    /** List of characters to trim from commands. */
    private static readonly charList;
    /** Pattern for inserting quotes into numbers. */
    private static pattern;
    /** The fancy apostrophes to strip. */
    private static fancyQuote1;
    /** The fancy quotes to strip. */
    private static fancyQuote2;
    /** Used for keeping  */
    private static sanitizeSQL1;
    /** Removes any dangling quotes. */
    private static removeDanglingQuotes1;
    private static removeDanglingQuotes2;
    /** Used for formatting gold. */
    private static formatGold;
    /** Used for formatting gold. */
    private static formatCopper;
    /** Used for formatting gold. */
    private static formatSilver;
    /** Used for formatting gold. */
    private static formatPlatinum;
    /**
     * A utility to format numbers with commas. Works extra quickly.
     *
     * @param input The number to format with commas.
     */
    static numberWithCommas(input: number): string;
    static getNumber(input: string): number | null;
    static replaceFancyQuotes(input: string): string;
    /**
     * Processes the user input.
     *
     * @param input The input to process.
     */
    static processUserInput(input: string): string;
    /**
     * Escapes the given input to be placed in a database.
     *
     * @param input The input to escape.
     */
    static escapeMySQLInput(input: any): string;
    /**
     * Escapes the SQL, without quoting the input.
     *
     * @param input The input to sanitize.
     */
    static escapeSQLInput(input: any): string;
    /**
     * Format the fund input. Makes it easier to process.
     *
     * @param input The input to format.
     */
    static formatFundInput(input: string): string;
}
