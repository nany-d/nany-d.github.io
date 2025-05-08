'use client'

import { useEffect } from 'react'
import { redirect } from "next/navigation"

export default function Custom404() {

  useEffect(() => {

    return () => {
      redirect("/")
    };
  }, )

  return (
    <div style={{ textAlign: 'center', padding: '5rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to homepage...</p>
    </div>
  );
}
