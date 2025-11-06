import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();

    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwrite_URL)
            .setProject(conf.appwrite_PROJECT_ID);
            
        this.account = new Account(this.client); 
    }
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method
                 return this.login({email, password});

            }
            return null;
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error",error);
        }
    }

    async login({email, password}){
        try {
            return  await this.account.createEmailSession(email,password);

        } catch(error){
            console.log("Appwrite service :: login :: error",error) 
        }
        
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch(error) {
            console.log("Appwrite service :: getCurrentUser :: error", error );
        }
        return null;
    }

    async logOut() {
        try {
                await this.account.deleteSession( );
        }catch(error) {
            console.log("Appwrite service :: logOut :: error",error);
        }
    }
}

const authService = new AuthService();

export default authService