import * as admin from 'firebase-admin';
const firebaseAdminConfig = { //todo: can use env variables
       
  "type": "service_account",
  "project_id": "project-4c256",
  "private_key_id": "c9bc2521ab28227db6fb7a647edfae300d034aaf",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDgQAVnVejO5F+Y\nnbjb5s6z1VROBkynRnL8qj96s88qiEtAIx/Csl3LnXdtxwnHnNA14hhlfBhxhQJK\n+01xk84xu6NSnqrA9G1rdrL4kl3LwcGKpUvg41xZOk7CfhjUz3FPqKRunaqmC1Tw\npB2FHko9kkPYzjX4oWRH5u3J6hW2tWPfWT0a/e862YzDyPbwlDGSj1U2CLfBt5FZ\ntUjtBNeIRoxHhRDlaPBwT1fSzjQ26psCkp26sXlkxzpgWgqZPjoMkglHBa5KspMo\nOgwuvz/bDDXM/T5bpqXAO1sp5+CRLJR5G1reje4c8Ep3TFajqIyPP/da/D5YZt1A\nMVCiBsZhAgMBAAECggEAIl4tddTYxTyC2iTx++G3tB/xt7OHc+t8G/ULnYaJLX+N\n6Np5N6GWdmo/r3ddrFYAIwHvsz39kQhNfaheChYY985GDZd7m+7aBio+65GjBmM/\ngjwrEOBHevVQtMYWkCbqusahzMIlMSVzcx3z2D74Kc+MzmFsLBqv/8UIlHVntoR0\nwYRF5JzPuyTpPREu49jMWLRx6N1vSW6j9RAbQPHZ9T31lMB1whA+MYrFYXEGnbGc\n2UcOXl3pFfkCYc813/2ZWI3NxB6I+C3tZI+L7bV4Lp+//i8Uqk5VksdzAs2qbt0p\nlpvn/6f9H8eKMU1pyMKLrCAfmZxlRsCI/v+0gtcrQQKBgQD0LhMLiyfodxQsMn/N\npQcaohQmCZPiG8J6gx+F33s76ApFH/BMQ59A8s/nXEWpTSFcXYQ/dd+CKO3Ir3ic\ndYOQGqPsmo2aAv2uIGvFFD1HyPtUjyGDa4mfvnf1UOWI27eKcaxIeAdciSZzKQqw\nZkp83Jgsqy98/NfpME8l0wdyVQKBgQDrGvi5vxKTqaezGQX59qIwSXbwCEfEprlP\nbcb/E1IShj1t7dMZL/WEoAjls6ST6ubZBwirAIFwJrEqDJilHJsgdaxLUYVOHove\nv3+PDJtOheJs3aPJyZnqwepmTM8Hj77XKT5f5Qw1AuYIBFoJ/qitwaXCfIS0Okat\nHaEIYtXH3QKBgQCE8+Fi064zIUNWnViBPG4VzlJyM5zV7I+D7Ylodzq+b6XH5ZAN\ntnQsBQm2y8MSX/DePf0YILJGSMrQDtr5NfMgr6C5351iUmaWPQjxEggb4g8XB6gT\nyqXw2OCwLhAM6LWTKDnKa7B2bicFZT9wtQGx4tro13zP7UwSqD8wNStE0QKBgQCe\nM/QS6aRSgOM7/SasYW4aGBVUx/2jMp2X+ULi+dlMZdCIXHSkikUoDZhvGUcx0eut\nNrJ6f0iacy7cIMXGtU0dtpFNzXlqa9uq9Cmd1NndKPKIV0yTyHkuI3bbh+v4Jp5A\nopw6YyKnuV+ZHXSJLTfMVHZ6PNf/fwd4DmwB/J/mcQKBgQDFHRWf+vGoIVmjNg5D\ncIJZqJBRGxWxZZnOi2xBtUCSeyUtkaRARXV6Csj+e/StBdA++ZlWOFoDBSiJgRyz\nxNylBBB5ZWEAp5pBoh81gHReIPWlNTGMe/BZsHQLdJ2DtVxPDFWD/i7m7E3MCJie\ntojYQGAeDFTeMe1ahgMn1CXi+Q==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ts8ki@project-4c256.iam.gserviceaccount.com",
  "client_id": "116692741977534355309",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ts8ki%40project-4c256.iam.gserviceaccount.com"
}
if (admin.apps.length === 0) {
    // Initialize Firebase
    admin.initializeApp({
        credential: admin.credential.cert(firebaseAdminConfig),
    });
}
export const adminAuth = admin.auth;