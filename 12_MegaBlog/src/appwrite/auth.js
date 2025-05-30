/*
  AuthService: A class to manage user authentication using Appwrite in a React application.

  - It imports configuration values from the conf file and uses Appwrite's SDK classes (Client, Account, ID).
  - The class handles all authentication-related tasks, including:
      1. Initializing Appwrite client and account services.
      2. Creating a new account with email, password, and name.
         - Automatically logs in the user after successful account creation.
      3. Logging in a user with email and password.
      4. Fetching the currently logged-in user's details.
      5. Logging out the user by deleting all sessions.

  Structure:
    - `constructor()` sets up the Appwrite client using endpoint and project ID.
    - `createAccount()` registers a new user and logs them in.
    - `login()` creates a session using email/password.
    - `getCurrentUser()` returns currently logged-in user's details.
    - `logout()` deletes all active sessions.

  Example usage:
    import authService from './services/auth';
    authService.login({ email, password });
*/

import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Auto login after account creation
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;
