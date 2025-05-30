"use client"
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/about')
  // kalau ada waktu isi jd hero landing page
}
