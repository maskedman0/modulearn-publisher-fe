export enum MediaType {
   image = "image",
   video = "video",
}

export interface UploadedFile {
   readonly publicId: string;
   readonly mediaUrl: string;
   readonly mediaType: MediaType;
}
