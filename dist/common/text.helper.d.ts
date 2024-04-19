export declare function radomText(length: number): string;
export declare function radomNumber(length: number): string;
export declare function createPagination<T>(data: T[], total: number, page: number, pageSize: number): {
    total: number;
    records: T[];
    currentPage: number;
    pageSize: number;
};
export declare class ResPaginationDto {
    keyword?: string | null;
    id?: string | null;
    limit: number;
    page: number;
}
export declare class ResPagination {
    keyword?: string | null;
    limit: number;
    page: number;
}
export declare class ResPaginationListBet {
    keyword?: string | null;
    idGame: number;
    limit: number;
    page: number;
}
export declare class ResPaginationHisBet {
    keyword?: string | null;
    limit: number;
    page: number;
}
export declare function resultData({ statusCode, message, data, }: {
    statusCode?: number;
    message?: string;
    data?: any;
}): {
    statusCode: number;
    message: string;
    data: any;
};
export declare function getFLWeek(): {
    firstDay: {
        date: Date;
        string: string;
    };
    lastDay: {
        date: Date;
        string: string;
    };
};
export declare const deleteFile: (file: string) => Promise<void>;
