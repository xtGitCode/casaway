export type actionFunction = (
    prevSate: any, // same page session memory of previous submission result
    formData: FormData // user input in the form
) => Promise<{message:string}>; // return message to display to user
