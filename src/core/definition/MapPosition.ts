export default interface MapPosition {
    lon: number;
    lat: number;
    type: PositionType;
    meta: {
        name: string;
        class: Array<any>;
    }
}

enum PositionType {
    Building = 'building',
    Resource = 'resource',
    Event = 'event',
}