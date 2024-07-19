import { Client, Account } from 'appwrite';

const client = new Client();

client
       .setEndpoint('https://cloud.appwrite.io/v1')
       .setProject('66992be600306ff111e1');

const account = new Account(client);

export { client, account };
