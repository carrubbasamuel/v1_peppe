'use client'

import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL,
  ClientId: process.env.NEXT_PUBLIC_AWS_CLIENT_ID
};

const userPool = new CognitoUserPool(poolData);

export default userPool;