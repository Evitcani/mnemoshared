export declare class EncryptionUtility {
    private readonly key;
    private static algorithm;
    constructor(cryptKey: string);
    encrypt(text: string): string;
    decrypt(text: string): string;
}
