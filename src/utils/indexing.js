const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://remittancev2:1bIvCxexGS0VyDlzYc5RG6xXu7zBOO5ThWz4zHLa1Ap8GMWvqIcGrRrhilIElA5RSIRYbf1es3WpACDbyNiWnQ==@remittancev2.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@remittancev2@';
// const connectionString = 'mongodb://remittance:XmC4KuGp9bfd9vXlyX02TeqGD9VkxSuzHRAnAzbiRmVSgfqcbUymCfdh3sYCzILKvJlalIry39cAACDbvt3CLQ==@remittance.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@remittance@'
async function main() {
    const client = await MongoClient.connect(connectionString, { useUnifiedTopology: true });
    const dbName = 'test';
    const db = client.db(dbName);

    // AccessLevels
    await db.collection('accesslevels').createIndex({ level: 1 });
    await db.collection('accesslevels').createIndex({ deleted: 1 });
    await db.collection('accesslevels').createIndex({ createdAt: 1 });

    // Credentials
    await db.collection('credentials').createIndex({ userId: 1 });
    await db.collection('credentials').createIndex({ accessLevel: 1 });
    await db.collection('credentials').createIndex({ deleted: 1 });
    await db.collection('credentials').createIndex({ createdAt: 1 });

    // GreenRegion
    await db.collection('greenregion').createIndex({ userId: 1 });
    await db.collection('greenregion').createIndex({ region: 1 });
    await db.collection('greenregion').createIndex({ deleted: 1 });
    await db.collection('greenregion').createIndex({ createdAt: 1 });

    //   // WhiteRegion
    //   await db.collection('WhiteRegion').createIndex({ userId: 1 });
    //   await db.collection('WhiteRegion').createIndex({ region: 1 });
    //   await db.collection('WhiteRegion').createIndex({ deleted: 1 });
    //   await db.collection('whiteregion').createIndex({ createdAt: 1 });

    // LandbankCredentialsAssignment
    await db.collection('landbankcredentialsassignment').createIndex({ assignee: 1 });
    await db.collection('landbankcredentialsassignment').createIndex({ credential: 1 });
    await db.collection('landbankcredentialsassignment').createIndex({ deleted: 1 });
    await db.collection('landbankcredentialsassignment').createIndex({ createdAt: 1 });

    // LandbankTransaction
    await db.collection('landbanktransaction').createIndex({ transactionCode: 1 });
    await db.collection('landbanktransaction').createIndex({ user: 1 });
    await db.collection('landbanktransaction').createIndex({ ip: 1 });
    await db.collection('landbanktransaction').createIndex({ type: 1 });
    await db.collection('landbanktransaction').createIndex({ status: 1 });
    await db.collection('landbanktransaction').createIndex({ result: 1 });
    await db.collection('landbanktransaction').createIndex({ receiver: 1 });
    await db.collection('landbanktransaction').createIndex({ amount: 1 });
    await db.collection('landbanktransaction').createIndex({ referrer: 1 });
    await db.collection('landbanktransaction').createIndex({ comission: 1 });
    await db.collection('landbanktransaction').createIndex({ comissionType: 1 });
    await db.collection('landbanktransaction').createIndex({ deleted: 1 });
    await db.collection('landbanktransaction').createIndex({ createdAt: 1 });

    //   // Logs
    await db.collection('logs').createIndex({ enterTime: 1 });
    await db.collection('logs').createIndex({ enterDate: 1 });
    await db.collection('logs').createIndex({ exitTime: 1 });
    await db.collection('logs').createIndex({ exitDate: 1 });
    await db.collection('logs').createIndex({ ip: 1 });
    await db.collection('logs').createIndex({ changes: 1 });
    await db.collection('logs').createIndex({ duration: 1 });
    await db.collection('logs').createIndex({ deleted: 1 });
    await db.collection('logs').createIndex({ createdAt: 1 });

    //   // Token
    await db.collection('tokens').createIndex({ token: 1 });
    await db.collection('tokens').createIndex({ user: 1 });
    await db.collection('tokens').createIndex({ type: 1 });
    await db.collection('tokens').createIndex({ expires: 1 });
    await db.collection('tokens').createIndex({ blacklisted: 1 });
    await db.collection('tokens').createIndex({ createdAt: 1 });

    //   // User
    await db.collection('users').createIndex({ name: 1 });
    await db.collection('users').createIndex({ accessLevels: 1 });
    await db.collection('users').createIndex({ email: 1 });
    await db.collection('users').createIndex({ locked: 1 });
    await db.collection('users').createIndex({ deleted: 1 });
    await db.collection('users').createIndex({ password: 1 });
    await db.collection('users').createIndex({ role: 1 });
    await db.collection('users').createIndex({ referrer: 1 });
    await db.collection('users').createIndex({ isEmailVerified: 1 });
    await db.collection('users').createIndex({ createdAt: 1 });


    //   // UserLimitations
    await db.collection('userlimitations').createIndex({ userId: 1 });
    await db.collection('userlimitations').createIndex({ limitType: 1 });
    await db.collection('userlimitations').createIndex({ value: 1 });
    await db.collection('userlimitations').createIndex({ deleted: 1 });
    await db.collection('userlimitations').createIndex({ createdAt: 1 });
    // Config
    await db.collection('config').createIndex({ 'transaction.frequency.duplication': 1 }, { name: 'transaction_frequency_duplication_1' });
    await db.collection('config').createIndex({ 'transaction.frequency.cutoffTime.cutoffStartTime': 1 }, { name: 'transaction_frequency_cutoffStartTime_1' });
    await db.collection('config').createIndex({ 'transaction.frequency.cutoffTime.cutoffEndTime': 1 }, { name: 'transaction_frequency_cutoffEndTime_1' });
    await db.collection('config').createIndex({ 'transaction.transactionAmount.transactionAmountLimit.perTransactionAmount': 1 }, { name: 'transaction_amount_perTransactionAmount_1' });
    await db.collection('config').createIndex({ 'transaction.transactionAmount.transactionAmountLimit.perDayTransactionAmount': 1 }, { name: 'transaction_amount_perDayTransactionAmount_1' });
    await db.collection('config').createIndex({ 'transaction.transactionAmount.transactionAmountLimit.transactionTotalAmount': 1 }, { name: 'transaction_amount_transactionTotalAmount_1' });
    await db.collection('config').createIndex({ 'apiRateLimiter.totalNumber': 1 }, { name: 'api_rate_limiter_totalNumber_1' });
    await db.collection('config').createIndex({ 'apiRateLimiter.callPerSecond': 1 }, { name: 'api_rate_limiter_callPerSecond_1' });
    await db.collection('config').createIndex({ 'apiRateLimiter.dailyLimit': 1 }, { name: 'api_rate_limiter_dailyLimit_1' });
    await db.collection('config').createIndex({ 'ratesFeesManagement.percentage.value': 1 }, { name: 'rates_fees_management_percentage_value_1' });
    await db.collection('config').createIndex({ 'ratesFeesManagement.percentage.active': 1 }, { name: 'rates_fees_management_percentage_active_1' });
    await db.collection('config').createIndex({ 'ratesFeesManagement.markup.value': 1 }, { name: 'rates_fees_management_markup_value_1' });
    await db.collection('config').createIndex({ 'ratesFeesManagement.markup.active': 1 }, { name: 'rates_fees_management_markup_active_1' });

    // ApiTokens
    await db.collection('apitokens').createIndex({ token: 1 }, { name: 'token_1' });
    await db.collection('apitokens').createIndex({ referrer: 1 }, { name: 'referrer_1' });
    await db.collection('apitokens').createIndex({ user: 1 }, { name: 'user_1' });
    await db.collection('apitokens').createIndex({ expiration: 1 }, { name: 'expiration_1' });
    await db.collection('apitokens').createIndex({ active: 1 }, { name: 'active_1' });
    await db.collection('apitokens').createIndex({ endpointGroupId: 1 }, { name: 'endpoint_group_id_1' });
    await db.collection('apitokens').createIndex({ deleted: 1 }, { name: 'deleted_1' });
    await db.collection('apitokens').createIndex({ createdAt: 1 }, { name: 'created_at_1' });
    // ApiGroups
    await db.collection('apigroups').createIndex({ name: 1 }, { name: 'name_1' });
    await db.collection('apigroups').createIndex({ endpoints: 1 }, { name: 'endpoints_1' });
    await db.collection('apigroups').createIndex({ deleted: 1 }, { name: 'deleted_1' });
    await db.collection('apigroups').createIndex({ createdAt: 1 }, { name: 'created_at_1' });

    console.log('Indexes created successfully');
    await client.close();
}

main().catch(console.error);
