
import {dataTypeCh, eventCh} from './types';

export class EventInfo {
    public readonly eventType: eventCh;
    public nickname: string;
    public readonly data: dataTypeCh;
    
    public constructor(eventType: eventCh = "", data: dataTypeCh = "") {
        this.eventType = eventType;
        this.nickname = "~server~";
        this.data = data;
    }

    public toString(): string {
        const json = JSON.stringify(this);
        return json;
    }

    public static fromJson(data: string): EventInfo {
        const eventInfo = JSON.parse(data) as EventInfo;
        return eventInfo;
    }
}