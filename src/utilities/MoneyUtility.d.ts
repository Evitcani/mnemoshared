/**
 * Utility for counting money.
 */
import { PartyFundDTO } from "../dto/model/PartyFundDTO";
import { Money } from "../models/Money";
export declare class MoneyUtility {
    /**
     * Converts all money to base units (copper).
     *
     * @param fund The fund to turn into copper.
     */
    static pileIntoCopper(fund: PartyFundDTO): number;
    /**
     * Converts an amount back into fund for storage.
     *
     * @param amt The amount
     */
    static copperToFund(amt: number): PartyFundDTO;
    /**
     * Process the arguments to determine how much money is being added or removed.
     *
     * @param args The arguments sent by the user to make sense of.
     */
    static processMoneyArguments(args: string[]): PartyFundDTO;
    /**
     * Adds the given "Money" amount to the given fund.
     *
     * @param money The money to put into the fund.
     * @param fund The fund to put the money into.
     */
    static addToFund(money: Money, fund: PartyFundDTO): PartyFundDTO;
    /**
     * Searches for the type of money type and amount.
     *
     * @param arg The argument to find the type for.
     */
    static searchForMoneyType(arg: string): Money;
    /**
     * Processes the string into a money type.
     *
     * @param str The string to turn into a number.
     * @param type The type of the number.
     */
    private static processNumber;
    /**
     *  Tries to figure out where the arg belongs.
     *
     * @param arg The arg to process into a number and type.
     */
    static giveAmountBack(arg: string): Money;
}
