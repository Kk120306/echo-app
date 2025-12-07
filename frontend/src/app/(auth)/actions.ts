'use server';

import { redirect } from 'next/navigation';

export async function loginWithGoogle() {
    redirect(process.env.BACKEND_HOST + '/auth/google');
}