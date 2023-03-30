'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { authUtils } from '../../firebase/authUtils';

function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();
    await authUtils.register(email, password);
    return router.push('/');
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Register</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Registrovat</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
