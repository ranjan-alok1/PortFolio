import emailjs from 'emailjs-com';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { formData } = req.body;

            const serviceID = process.env.EMAILJS_SERVICE_ID;
            const templateID = process.env.EMAILJS_TEMPLATE_ID;
            const userID = process.env.EMAILJS_USER_ID;

            // Initializing EmailJS with my user ID
            emailjs.init(userID);

            // Send email using EmailJS
            const result = await emailjs.send(serviceID, templateID, formData);

            return res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            return res.status(500).json({ success: false, message: 'Failed to send email' });
        }

    } else {
        //non post method ke liye
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
