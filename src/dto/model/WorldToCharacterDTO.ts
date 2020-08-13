import {DTOType} from "../DTOType";
import {PartyDTO} from "./PartyDTO";

export interface WorldToCharacterDTO {
    id?: string;
    dtoType?: DTOType.WORLD_TO_CHARACTER;
    createdDate?: Date;
    updatedDate?: Date;
    isNpc?: boolean;
    worldId?: string;
    partyId?: number;
    party?: PartyDTO;
    characterId?: string;
}