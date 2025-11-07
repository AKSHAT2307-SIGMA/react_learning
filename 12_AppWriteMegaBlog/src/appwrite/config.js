import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwrite_URL)
        .setProject(conf.appwrite_PROJECT_ID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client );
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwrite_DATABASE_ID,
                conf.appwrite_ARTICLES,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log("Appwrite service :: createPost :: error", error); 
        }
    }
    async updatePost(slug,{title, content, featuredImage, status}){  
        try {
                return await this.databases.updateDocument(
                    conf.appwrite_DATABASE_ID,
                    conf.appwrite_ARTICLES,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status, 
                    }
                )
        }catch(error){
            console.log("Appwrite service :: updatePost :: error", error);
        }

    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwrite_DATABASE_ID,
                 conf.appwrite_ARTICLES,
                 slug,
            )
             return true 
        }catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }
    async getPost(slug) {
        try{
            return await this.databasesgetDocument(
                conf.appwrite_DATABASE_ID,
                conf.appwrite_ARTICLES,
                slug
            )
        }catch(error){
            console.log("Appwrite service :: getPost :: error", error);
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try { 
            return await this.databases.listDocuments(
                conf.appwrite_DATABASE_ID,
                conf.appwrite_ARTICLES,
                queries,
               
            )

        }catch(error){
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }

    }
    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwrite_BUCKET_ID,
                 ID.unique,
                 file
            )
            
        }catch(error){
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwrite_BUCKET_ID,
                fileId
            )

        } catch(error) {
            console.log("Appwrite service :: deleteFile :: error", error);
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwrite_BUCKET_ID,
            fileId
        )
    }
}

const service= new Service();
export default service