# MAPRMS - Medical Appointment & Patient Record Management System

## Overview
MAPRMS enables patients to schedule appointments, update medical history, and allows doctors secure access to patient records.

## Features
- Appointment Scheduler
- Patient Records Management
- Doctor Dashboard
- Authentication (Login/Signup)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Run tests:
   ```bash
   npm test
   ```
4. Lint code:
   ```bash
   npm run lint
   ```

## CI/CD
- Automated via GitHub Actions (`.github/workflows/ci.yml`).
- Runs lint, tests, and build on push/PR.

## Versioning & Deployment
- Tag releases (e.g., `v2.0-beta`) for deployment.
- Hotfixes should be branched from `main` and merged back after validation.

## Folder Structure
```
src/
  components/
    AppointmentScheduler.jsx
    PatientRecords.jsx
    DoctorDashboard.jsx
    Authentication.jsx
    *.test.jsx
  index.js
```

## Contributing
- Use feature branches for new features.
- Open PRs for code review.
- Ensure all tests pass before merging.
