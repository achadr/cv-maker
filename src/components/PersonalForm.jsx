import React from 'react';
import { useCVStore } from '../store/cvStore';
import { Input } from './shared/Input';
import { TextArea } from './shared/TextArea';
import { User } from 'lucide-react';

export const PersonalForm = () => {
  const { personal, summary, updatePersonal, updateSummary } = useCVStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <User size={20} className="text-primary" />
        <h2 className="text-lg font-semibold text-gray-900">Personal Details</h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="First Name"
          value={personal.firstName}
          onChange={(value) => updatePersonal('firstName', value)}
          placeholder="John"
          required
        />
        <Input
          label="Last Name"
          value={personal.lastName}
          onChange={(value) => updatePersonal('lastName', value)}
          placeholder="Doe"
          required
        />
      </div>

      <Input
        label="Professional Title"
        value={personal.title}
        onChange={(value) => updatePersonal('title', value)}
        placeholder="Software Engineer"
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Email"
          type="email"
          value={personal.email}
          onChange={(value) => updatePersonal('email', value)}
          placeholder="john@example.com"
        />
        <Input
          label="Phone"
          type="tel"
          value={personal.phone}
          onChange={(value) => updatePersonal('phone', value)}
          placeholder="+1 234 567 8900"
        />
      </div>

      <Input
        label="Location"
        value={personal.location}
        onChange={(value) => updatePersonal('location', value)}
        placeholder="New York, NY"
      />

      <Input
        label="LinkedIn"
        type="url"
        value={personal.linkedin}
        onChange={(value) => updatePersonal('linkedin', value)}
        placeholder="https://linkedin.com/in/johndoe"
      />

      <Input
        label="Website"
        type="url"
        value={personal.website}
        onChange={(value) => updatePersonal('website', value)}
        placeholder="https://johndoe.com"
      />

      <TextArea
        label="Professional Summary"
        value={summary}
        onChange={updateSummary}
        placeholder="Brief overview of your professional background and key strengths..."
        rows={4}
      />
    </div>
  );
};
