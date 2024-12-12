function handleFirebaseError(error) {
  if (error instanceof Error) {
    // Standard error object, handle appropriately
    console.error('Standard Error:', error.message);
  } else if (typeof error === 'object' && error !== null) {
    // Firebase-specific error object or status codes
    console.error('Firebase-specific Error:', error);
    if (error.code) {
      console.error('Error Code:', error.code);
    }
    if (error.message) {
      console.error('Error Message:', error.message);
    }
  } else {
    // Unexpected error type
    console.error('Unknown Error:', error);
  }
}

// Example Usage:
// ... Firebase operation ...
.catch(handleFirebaseError); 