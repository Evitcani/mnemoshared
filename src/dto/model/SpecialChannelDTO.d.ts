import { DTOType } from "../DTOType";
import { SpecialChannelDesignation } from "../../enums/SpecialChannelDesignation";
export declare class SpecialChannelDTO {
    id?: number;
    dtoType: DTOType.SPECIAL_CHANNEL;
    createdDate?: Date;
    updatedDate?: Date;
    guild_id?: string;
    channel_id?: string;
    designation?: SpecialChannelDesignation;
}
