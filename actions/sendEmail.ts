// "use server";

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const validateString = (value: unknown, maxLength: number) => {
//   if(!value || typeof value !== "string" || value.length > maxLength) {
//     return false;
//   }

//   return true;
// }

// export const sendEmail = async (formData: FormData) => {

//   const message = formData.get('message');
//   const senderEmail = formData.get('email');

//   //server side validation
//   if (!validateString(senderEmail, 500)) {
//     return {
//       error:"Invalid sender email"
//     }
//   }
//   if (!validateString(message, 5000)) {
//     return {
//       error:"Invalid message"
//     }
//   }

//   resend.emails.send({
//     from: 'onboarding@resend.dev',
//     to: 'vadim.kim0203@gmail.com',
//     subject:'Email from contact form on CV website',
//     reply_to: senderEmail,
//     text: message,
//   }); 
// 