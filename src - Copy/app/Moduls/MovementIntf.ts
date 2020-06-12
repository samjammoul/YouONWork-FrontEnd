export interface MovementIntf {
    fromListIdx : number,
    fromTaskIdx : number,
    toListIdx : number,
    toTaskIdx : number
}


export class Movement implements MovementIntf{
    fromListIdx: number;
    fromTaskIdx: number;
    toListIdx: number;
    toTaskIdx: number;

    constructor(fromListIdx : number , toListIdx : number , fromTaskIdx? : number , toTaskIdx? : number){
        this.fromListIdx = fromListIdx;
        this.toListIdx = toListIdx;

        this.fromTaskIdx = fromTaskIdx;
        this.toTaskIdx = toTaskIdx;
    }

}


