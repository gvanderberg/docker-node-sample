
interface Read<T> {
    findById: (_id: string, callback: (error: any, result: T) => void) => void;
    retrieve: (callback: (error: any, result: T) => void) => void;
}

export = Read;