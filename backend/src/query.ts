import { prisma } from './config/db';

async function findUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email
        }
    });
}

async function createUser(data: {
    email: string,
    name: string,
    provider: string,
    providerId: string
}) {
    return await prisma.user.create({
        data
    });
}

async function retrieveUserById(id: string) {
    return await prisma.user.findUnique({
        where: {
            id
        }
    });
}

export {
    findUserByEmail
    , createUser
}