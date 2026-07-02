import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !message) {
      setStatus('error')
      setErrorMsg('Name, email, and message are required.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setErrorMsg('Enter a valid email address.')
      return
    }

    setStatus('submitting')
    const org = String(data.get('organization') || '').trim()
    const subject = encodeURIComponent(`JucheGang Contact: ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org || 'N/A'}\n\n${message}`
    )
    window.location.href = `mailto:panda@juche.org?subject=${subject}&body=${body}`
    setTimeout(() => setStatus('success'), 400)
  }

  if (status === 'success') {
    return (
      <div className="border-2 border-[var(--ink)] p-6" role="status">
        <p className="font-macro text-lg mb-2">Message Ready</p>
        <p className="text-sm text-[var(--muted)]">Your email client should open. If it did not, write to panda@juche.org directly.</p>
        <button type="button" className="btn-hazard mt-6" onClick={() => setStatus('idle')}>
          Send Another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required autoComplete="name" disabled={status === 'submitting'} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" disabled={status === 'submitting'} />
      </div>
      <div>
        <label htmlFor="organization">Organization</label>
        <input type="text" id="organization" name="organization" autoComplete="organization" disabled={status === 'submitting'} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} disabled={status === 'submitting'} />
      </div>
      {status === 'error' && (
        <p className="font-mono-ui text-[var(--hazard)]" role="alert">{errorMsg}</p>
      )}
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Opening Mail...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm