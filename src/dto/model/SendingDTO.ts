import {DTOType} from "../DTOType";
import {DateDTO} from "./DateDTO";
import {CharacterDTO} from "./CharacterDTO";
import {UserDTO} from "./UserDTO";

export interface SendingDTO {
    id?: string;
    dtoType: DTOType.SENDING;
    createdDate?: Date;
    updatedDate?: Date;
    worldId?: string;
    inGameDate?: DateDTO;
    content?: string;
    reply?: string;
    noReply?: boolean | null;
    noConnection?: boolean | null;
    isReplied?: boolean | null;
    toCharacterId?: string;
    toCharacter?: CharacterDTO;
    fromCharacterId?: string;
    fromCharacter?: CharacterDTO;
    sendingMessageFromUser?: UserDTO;
    sendingReplyFromUser?: UserDTO;
}