# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

To report a security vulnerability, please email [security@ideatech.example.com](mailto:security@ideatech.example.com). We will respond within 48 hours.

## Security Best Practices

### Sensitive Data Handling
- **.env usage**: Store secrets in `.env` files, never in source code.
- **Client-side**: Never expose server-side secrets to the client.
- **Git**: Ensure `.env` is added to `.gitignore`.

### Error Handling
- Use generic error messages for the user.
- Log detailed errors on the server only.

### Input Validation
- Sanitize and validate all user inputs.
- Prevent SQL injection and XSS via parameterization and escaping.

### Database Security
- Use trusted ORMs (e.g., Prisma, Supabase).
- Enable Row-Level Security (RLS).
- Avoid raw queries where possible.

### Hosting & Infrastructure
- Deploy on secure, managed platforms (Vercel, Netlify, AWS).
- Enable DDoS protection and firewalls.
- **HTTPS**: Enforce HTTPS for all communications.

### Secure Communications
- Use strict CSP (Content Security Policy).
- Implement HSTS and X-Content-Type-Options headers.

### Development Process
- **Dependencies**: Regularly run `npm audit`.
- **Code Analysis**: Use linters (ESLint) and static analysis tools.
- **Testing**: Perform regular security assessments.
