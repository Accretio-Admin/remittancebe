const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://remittancev2:1bIvCxexGS0VyDlzYc5RG6xXu7zBOO5ThWz4zHLa1Ap8GMWvqIcGrRrhilIElA5RSIRYbf1es3WpACDbyNiWnQ==@remittancev2.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@remittancev2@';

async function main() {
    const client = await MongoClient.connect(connectionString, { useUnifiedTopology: true });
    const dbName = 'test';
    const db = client.db(dbName);

    //   // AccessLevels
    //   await db.collection('AccessLevels').createIndex({ level: 1 });
    //   await db.collection('AccessLevels').createIndex({ deleted: 1 });
    await db.collection('AccessLevels').createIndex({ createdAt: 1 });

    //   // Credentials
    //   await db.collection('Credentials').createIndex({ userId: 1 });
    //   await db.collection('Credentials').createIndex({ accessLevel: 1 });
    //   await db.collection('Credentials').createIndex({ deleted: 1 });
      await db.collection('Credentials').createIndex({ createdAt: 1 });

    //   // GreenRegion
    //   await db.collection('GreenRegion').createIndex({ userId: 1 });
    //   await db.collection('GreenRegion').createIndex({ region: 1 });
    //   await db.collection('GreenRegion').createIndex({ deleted: 1 });
      await db.collection('GreenRegion').createIndex({ createdAt: 1 });

    //   // WhiteRegion
    //   await db.collection('WhiteRegion').createIndex({ userId: 1 });
    //   await db.collection('WhiteRegion').createIndex({ region: 1 });
    //   await db.collection('WhiteRegion').createIndex({ deleted: 1 });
      await db.collection('WhiteRegion').createIndex({ createdAt: 1 });

    //   // LandbankCredentialsAssignment
    //   await db.collection('LandbankCredentialsAssignment').createIndex({ assignee: 1 });
    //   await db.collection('LandbankCredentialsAssignment').createIndex({ credential: 1 });
    //   await db.collection('LandbankCredentialsAssignment').createIndex({ deleted: 1 });
      await db.collection('LandbankCredentialsAssignment').createIndex({ createdAt: 1 });

    //   // LandbankTransaction
    //   await db.collection('LandbankTransaction').createIndex({ transactionCode: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ user: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ ip: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ type: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ status: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ result: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ receiver: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ amount: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ referrer: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ comission: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ comissionType: 1 });
    //   await db.collection('LandbankTransaction').createIndex({ deleted: 1 });
      await db.collection('LandbankTransaction').createIndex({ createdAt: 1 });

    //   // Logs
    //   await db.collection('Logs').createIndex({ enterTime: 1 });
    //   await db.collection('Logs').createIndex({ enterDate: 1 });
    //   await db.collection('Logs').createIndex({ exitTime: 1 });
    //   await db.collection('Logs').createIndex({ exitDate: 1 });
    //   await db.collection('Logs').createIndex({ ip: 1 });
    //   await db.collection('Logs').createIndex({ changes: 1 });
    //   await db.collection('Logs').createIndex({ duration: 1 });
    //   await db.collection('Logs').createIndex({ deleted: 1 });
      await db.collection('Logs').createIndex({ createdAt: 1 });

    //   // Token
    //   await db.collection('Token').createIndex({ token: 1 });
    //   await db.collection('Token').createIndex({ user: 1 });
    //   await db.collection('Token').createIndex({ type: 1 });
    //   await db.collection('Token').createIndex({ expires: 1 });
    //   await db.collection('Token').createIndex({ blacklisted: 1 });
      await db.collection('Token').createIndex({ createdAt: 1 });

    //   // User
    //   await db.collection('User').createIndex({ name: 1 });
    //   await db.collection('User').createIndex({ accessLevels: 1 });
    //   await db.collection('User').createIndex({ email: 1 });
    //   await db.collection('User').createIndex({ locked: 1 });
    //   await db.collection('User').createIndex({ deleted: 1 });
    //   await db.collection('User').createIndex({ password: 1 });
    //   await db.collection('User').createIndex({ role: 1 });
    //   await db.collection('User').createIndex({ referrer: 1 });
    //   await db.collection('User').createIndex({ isEmailVerified: 1 });
    await db.collection('User').createIndex({ createdAt: 1 });
    

    //   // UserLimitations
    //   await db.collection('UserLimitations').createIndex({ userId: 1 });
    //   await db.collection('UserLimitations').createIndex({ limitType: 1 });
    //   await db.collection('UserLimitations').createIndex({ value: 1 });
    //   await db.collection('UserLimitations').createIndex({ deleted: 1 });
      await db.collection('UserLimitations').createIndex({ createdAt: 1 });
    
    console.log('Indexes created successfully');
    await client.close();
}

main().catch(console.error);
