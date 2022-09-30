import {Code} from "../enum/status.enum";
import {Status} from "../enum/code.enum";

export class HttpResponse {
    private timeStamp: string;

    constructor(private statusCode: Code, private httpStatus: Status, private message: string, private data?: {}) {
        this.timeStamp = new Date().toLocaleString();
        this.statusCode = statusCode;
        this.httpStatus = httpStatus;
        this.message = message;
        this.data = data;
    }
}
