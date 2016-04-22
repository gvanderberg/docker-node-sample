interface IReadRepository<T> {
    findById: (id: string, callback: (error: any, result: T) => void) => void;
    retrieve: (callback: (error: any, result: any) => void) => void;
}

export = IReadRepository;