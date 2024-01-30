import { StaffDto, UpdateStaffDto, CreateStaffDto } from 'src/shared/dto';
import { StaffService } from 'src/services';
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    getStaff(search: string): StaffDto[];
    getStaffById(id: number): StaffDto;
    createStaff(createStaffDto: CreateStaffDto, photo: any): Promise<StaffDto>;
    updatetaff(id: number, updateStaffDto: UpdateStaffDto, photo: any): Promise<StaffDto>;
    serveAvatar(fileId: any, res: any): Promise<any>;
    deleteStaff(id: number): void;
}
