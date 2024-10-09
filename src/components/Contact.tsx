'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

// Define the type for form data
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const Contact: React.FC = () => {
    // Define the form data with initial empty values
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        if (Object.keys(newErrors).length === 0) {
            const form = e.target as HTMLFormElement;

            // Submit the form
            form.submit();

            // Reset the form fields after submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });

            // Clear any errors if they exist
            setErrors({});
        } else {
            setErrors(newErrors);
        }
    };



    const validateForm = (data: FormData) => {
        const errors: Partial<FormData> = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10,14}$/;  // Ensure phone number is digits and 10-14 characters long

        if (!data.firstName) errors.firstName = "First Name is required";
        if (!data.lastName) errors.lastName = "Last Name is required";
        if (!data.email || !emailPattern.test(data.email)) errors.email = "Valid Email is required";
        if (!data.phone || !phonePattern.test(data.phone)) errors.phone = "Valid Phone number is required (10-14 digits)";
        if (!data.message) errors.message = "Message is required";

        return errors;
    };

    return (
        <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>

            <div className='flex justify-center items-center'>
                <ul className='space-y-4'>
                    <li className='flex items-center'>
                        <Image src={phone} alt='phone' className='h-[110px] w-auto mr-6' />
                        <p className='text-xl'>+9233-53958045</p>
                    </li>
                    <li className='flex items-center'>
                        <Image src={mail} alt='mail' className='h-[110px] w-auto mr-6' />
                        <p className='text-xl'>ma9400667@gmail.com</p>
                    </li>
                </ul>
            </div>

            <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
                <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let`s connect</h2>
                <p className='text-white/70 mb-6'>Send me a message and let's schedule a call!</p>
                <form className='space-y-4' action="https://getform.io/f/bxojmjna" method="POST" onSubmit={handleSubmit}>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <input
                            type='text'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.firstName ? 'border-red-500' : ''}`}
                            placeholder='First Name'
                            required
                            minLength={2}
                            maxLength={50}
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

                        <input
                            type='text'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.lastName ? 'border-red-500' : ''}`}
                            placeholder='Last Name'
                            required
                            minLength={2}
                            maxLength={50}
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className={`bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.email ? 'border-red-500' : ''}`}
                            placeholder='Email'
                            required
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}

                        <input
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            className={`bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.phone ? 'border-red-500' : ''}`}
                            placeholder='Phone'
                            required
                            pattern="[0-9]{10,14}"
                            title="Phone number must be between 10 and 14 digits"
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                    </div>

                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.message ? 'border-red-500' : ''}`}
                        placeholder='Your Message'
                        required
                        minLength={10}
                        maxLength={500}
                    />
                    {errors.message && <p className="text-red-500">{errors.message}</p>}

                    <button className='bg-orange-700 hover:bg-orange-500 px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
