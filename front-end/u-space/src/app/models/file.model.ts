export interface VirtualFile {
    uuid:string,
    name: string,
    pictureURL: string,
    volume: string,
    createDate: string,
    owner: string,
    icon?:string
}
export interface File {
    name: string;
    pictureURL: string;
    volume: string;
    createDate: Date;
    owner: string;
    icon :string;
    // PATH Implentation will be update
}

