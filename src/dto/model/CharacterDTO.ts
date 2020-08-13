import {NicknameDTO} from "./NicknameDTO";
import {DTOType} from "../DTOType";
import {WorldToCharacterDTO} from "./WorldToCharacterDTO";

export interface CharacterDTO {
    id?: string;
    dtoType: DTOType.CHARACTER;
    createdDate?: Date;
    updatedDate?: Date;
    img_url?: string;
    isNpc?: boolean
    nicknames?: NicknameDTO[];
    worldToCharacter?: WorldToCharacterDTO;
}