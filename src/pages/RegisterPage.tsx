import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import RegisterForm from '../components/forms/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
            <RegisterForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
