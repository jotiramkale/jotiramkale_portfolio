import { useState } from 'react'
import { motion } from 'framer-motion'
import Icon from '../common/Icon'

const initialForm = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('sending')

    try {
      // Integration point: wire this up to a form backend such as
      // Formspree, EmailJS, or your own API route. Example:
      //
      // await fetch('https://formspree.io/f/your-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // })
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel flex flex-col gap-5 p-6 sm:p-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-signal-400/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-signal-400/50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What are you looking to build or discuss?"
          className="resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-signal-400/50"
        />
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        disabled={status === 'sending'}
        className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            <Icon name="paperPlane" className="h-3.5 w-3.5" />
            Send message
          </>
        )}
      </motion.button>

      {status === 'success' && (
        <p className="flex items-center gap-2 text-sm text-signal-400">
          <Icon name="checkCircle" className="h-4 w-4" />
          Thanks — your message has been noted. I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-ember-400">Something went wrong. Please try again in a moment.</p>
      )}
    </form>
  )
}
