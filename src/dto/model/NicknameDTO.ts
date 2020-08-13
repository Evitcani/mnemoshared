import {DTOType} from "../DTOType";

export interface NicknameDTO {
    id?: string;
    dtoType: DTOType.NICKNAME;
    createdDate?: Date;
    updatedDate?: Date;
    name?: string;
    discordId?: string;
    characterId?: string;
}