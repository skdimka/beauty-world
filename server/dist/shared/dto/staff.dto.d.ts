import { BaseDto } from "./base-dto";
import { IStaffEntity } from "../interfaces";
export declare class StaffDto extends BaseDto {
    constructor(staff?: IStaffEntity);
    firstName: string;
    patronymic: string;
    surName: string;
    fullName: string;
    position: string;
    startWorkDate: Date;
    photo: string;
}
export declare class CreateStaffDto {
    firstName: string;
    patronymic: string;
    surName: string;
    position: string;
    startWorkDate: Date;
    photo: string;
}
export declare class UpdateStaffDto {
    firstName: string;
    patronymic: string;
    surName: string;
    position: string;
    startWorkDate: Date;
    photo: string;
}
