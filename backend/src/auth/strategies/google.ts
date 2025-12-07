import 'dotenv/config'; // having issues with  env not loading so reloading here  
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { findUserByEmail, createUser, retrieveUserById } from '../../query';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: 'http://localhost:4000/auth/oauth2/redirect/google',
    scope: ['profile', 'email']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails?.[0]?.value;
        if (!email) {
            return done(new Error('No email found in Google profile'));
        }
        let user = await findUserByEmail(email);

        if (!user) {
            user = await createUser({
                email,
                name: profile.displayName || 'No Name',
                provider: 'google',
                providerId: profile.id
            })
        }
        return done(null, user);
    } catch (e) {
        return done(e as Error);
    }
}));

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    try {
        const user = await retrieveUserById(id);
        done(null, user);
    } catch (e) {
        done(e as Error);
    }
});