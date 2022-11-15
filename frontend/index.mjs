import { readFile } from 'node:fs/promises';
import crypto from 'crypto';


const file_private_key = new URL('../private-key.pem', import.meta.url);
const privateKey = await readFile(file_private_key, { encoding: 'utf8' });

