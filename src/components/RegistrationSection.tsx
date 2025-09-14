'use client';
import { registrationSection, registrationSteps } from '@/data/mockData';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AccessCodeForm from './AccessCodeForm';
import TallyForm from './TallyForm';

export default function RegistrationSection() {
  const [currentStep, setCurrentStep] = useState<'code' | 'form'>('code');
  const [validatedCode, setValidatedCode] = useState('');
  const router = useRouter();

  const handleCodeValid = (code: string) => {
    setValidatedCode(code);
    setCurrentStep('form');
  };

  const handleCodeAlreadyUsed = (redirectUrl: string) => {
    router.push(redirectUrl);
  };

  const handleBackToCode = () => {
    setCurrentStep('code');
    setValidatedCode('');
  };

  return (
    <section id="daftar" className="py-20 bg-gradient-to-br from-red-600 to-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {registrationSection.title}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-red-200 mb-6">
            {registrationSection.subtitle}
          </h3>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white flex flex-col gap-8">
            <p className="text-lg md:text-xl text-red-100 mb-8 leading-relaxed">
              {registrationSection.description}
            </p>
            
            <div className="space-y-6">
              {registrationSteps.map((step) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-red-100 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          {currentStep === 'code' ? (
            <AccessCodeForm 
              onCodeValid={handleCodeValid}
              onCodeAlreadyUsed={handleCodeAlreadyUsed}
            />
          ) : (
            <TallyForm 
              code={validatedCode}
              onBack={handleBackToCode}
            />
          )}
        </div>
      </div>
    </section>
  );
}
