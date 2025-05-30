/*
  This configuration file extracts environment variables related to Appwrite
  and stores them in a single object called `conf` for easy access throughout the app.

  - import.meta.env.VITE_APPWRITE_*: These are environment variables defined in the .env file.
    Vite exposes them using the `import.meta.env` object.

  - The `String()` constructor ensures that the values are treated as strings (though often already are).

  - This file exports the `conf` object as the default export, making it simple to import Appwrite configuration
    anywhere in the app.

  Example usage:
    import conf from './conf';
    const url = conf.appwriteUrl;
*/

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf;
