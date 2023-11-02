"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffService = void 0;
const common_1 = require("@nestjs/common");
const in_memory_db_service_1 = require("./in-memory-db.service");
const constants_1 = require("../shared/constants");
const staff_mock_1 = require("../shared/misc/staff.mock");
const storage_1 = require("@google-cloud/storage");
const path_1 = require("path");
const uuid_1 = require("uuid");
let StaffService = class StaffService extends in_memory_db_service_1.InMemoryDbService {
    constructor() {
        super();
        this._initStorage();
        this.createMany(staff_mock_1.default);
    }
    uploadPhoto(file) {
        return new Promise((resolve, reject) => {
            const fileName = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
            const blob = this.bucket.file(fileName);
            const blobWriter = blob.createWriteStream({
                metadata: { contentType: file.mimetype, },
            });
            blobWriter.on('error', err => reject(err));
            blobWriter.on('finish', () => resolve(this._getFileUrl(blob.name)));
            blobWriter.end(file.buffer);
        });
    }
    _getFileUrl(blobName) {
        return `${constants_1.FIREBASE_STORAGE_HOST}/v0/b/${this.bucket.name}/o/${encodeURI(blobName)}?alt=media`;
    }
    _initStorage() {
        const storage = new storage_1.Storage({ keyFilename: constants_1.FIREBASE_STOREAGE_KEYFILE });
        this.bucket = storage.bucket(constants_1.FIREBASE_STORAGE_BUCKET);
    }
};
StaffService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StaffService);
exports.StaffService = StaffService;
//# sourceMappingURL=staff.service.js.map