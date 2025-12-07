import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Start Google OAuth flow
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// Google redirects here after user approves
router.get('/oauth2/redirect/google',
    passport.authenticate('google', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        // Success! Redirect to frontend
        res.redirect('/dashboard');
    }
);

// Check if user is authenticated
router.get('/me', (req, res) => {
    if (req.isAuthenticated()) {
        return res.json({ user: req.user });
    }
    return res.status(401).json({ error: 'Not authenticated' });
});

// Logout
router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ error: 'Logout failed' });
        }
        res.json({ message: 'Logged out successfully' });
    });
});


export default router;