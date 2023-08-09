import crypto from 'crypto'

import { CryptoData } from '../domain/entities/crypto'

export function crypt(password: string): CryptoData {
    const salt = crypto.randomBytes(16).toString('hex') //isso e aleatoridade da senha
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex')
    return {hash: hash, salt: salt}
}