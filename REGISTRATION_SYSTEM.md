# Registration System Documentation

## Overview
The registration system now includes a two-step process:
1. **Access Code Validation**: Users must enter a valid access code
2. **Registration Form**: If the code is valid and unused, users can proceed to the Tally form

## Components

### AccessCodeForm
- **Location**: `src/components/AccessCodeForm.tsx`
- **Purpose**: Handles access code input and validation
- **Features**:
  - Input validation
  - Loading states
  - Error handling
  - Calls API to validate code

### TallyForm
- **Location**: `src/components/TallyForm.tsx`
- **Purpose**: Displays the Tally registration form with pre-filled code
- **Features**:
  - Tally embed integration
  - Hidden field for access code
  - Back button to return to code input

### RegistrationSection
- **Location**: `src/components/RegistrationSection.tsx`
- **Purpose**: Main registration section that orchestrates the flow
- **Features**:
  - State management for form steps
  - Handles navigation between forms
  - Redirects to payment result if code already used

## API Endpoints

### POST /api/validate-code
- **Purpose**: Validates access code against Google Sheets
- **Request Body**: `{ "code": "string" }`
- **Response**:
  - Success (valid, unused): `{ "success": true, "code": "string", "alreadyUsed": false }`
  - Success (valid, used): `{ "success": true, "code": "string", "alreadyUsed": true, "redirectUrl": "string" }`
  - Error: `{ "error": "string" }`

## Google Sheets Integration

The system checks two sheets:
1. **"Kode" sheet**: Contains valid access codes
2. **"Anggota" sheet**: Contains used codes (registered members)

### API URL
```
https://script.google.com/macros/s/AKfycbzN7trpezIzuFmtZ6MZBfYDvOcWqRKcppnevEP1JF2wJUozqsf70Nrdyn17xvOUaXoBNA/exec?sheet=
```

## Flow Logic

1. User enters access code
2. System checks if code exists in "Kode" sheet
3. If code doesn't exist → Show "Kode tidak valid" error
4. If code exists, check if it's used in "Anggota" sheet
5. If code is already used → Redirect to payment result page
6. If code is valid and unused → Show Tally form with pre-filled code

## Pages

### Payment Result Page
- **Location**: `src/app/payment-result/page.tsx`
- **Purpose**: Shows information when access code is already used
- **Features**:
  - Displays code information
  - Shows registration status
  - Provides navigation options

## Environment Variables

The Google Sheets API URL is hardcoded in the API route. To use environment variables, create a `.env.local` file with:

```
NEXT_PUBLIC_SHEET_API=https://script.google.com/macros/s/AKfycbzN7trpezIzuFmtZ6MZBfYDvOcWqRKcppnevEP1JF2wJUozqsf70Nrdyn17xvOUaXoBNA/exec?sheet=
```

## Usage

1. Users visit the registration section
2. They see the access code input form
3. After entering a valid code, they proceed to the Tally form
4. The Tally form includes the access code as a hidden field
5. Users complete the registration process

## Error Handling

- Invalid codes show appropriate error messages
- Network errors are handled gracefully
- Loading states provide user feedback
- Form validation prevents empty submissions
