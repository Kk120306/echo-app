import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import authRoutes from './routes/auth-routes';
import passport from 'passport';
import './auth/strategies/google';

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

// Test
app.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
