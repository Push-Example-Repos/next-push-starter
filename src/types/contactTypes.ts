import { GroupDTO } from "./groupTypes";

type IMessageIPFS = any;

export interface Contact {
  threadhash: string;
  intent: string;
  intentSentBy: string;
  intentTimestamp: number;
  combinedDID: string;
  cid: string;
  chatId: string;
  groupInformation: GroupDTO;
  msg: IMessageIPFS;
}
