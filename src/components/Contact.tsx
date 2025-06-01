import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
  robot: boolean;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    robot: false,
  });
  
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, robot: e.target.checked }));
    if (errors.robot) {
      setErrors(prev => ({ ...prev, robot: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    if (!formState.robot) newErrors.robot = 'Please confirm you are not a robot';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({
          name: '',
          email: '',
          message: '',
          robot: false,
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-purple-100 text-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Contact</h2>
        <p className="text-center text-slate-600 mb-12">
          お問い合わせはこちらからお願いします
        </p>

        {submitSuccess && (
          <div className="max-w-md mx-auto bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded mb-8 text-center">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-700 text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.name ? 'border-red-500' : 'border-slate-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.email ? 'border-red-500' : 'border-slate-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-slate-700 text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                errors.message ? 'border-red-500' : 'border-slate-300'
              }`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <div className="mb-6">
            <label className="flex items-center text-slate-700 text-sm">
              <input
                type="checkbox"
                name="robot"
                checked={formState.robot}
                onChange={handleCheckboxChange}
                className={`mr-2 ${errors.robot ? 'border-red-500' : ''}`}
              />
              私はロボットではありません
            </label>
            {errors.robot && <p className="text-red-500 text-xs mt-1">{errors.robot}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center transition-all ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>送信する</span>
                <Send size={16} className="ml-2" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
