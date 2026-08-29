import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function FormSkeleton() {
  return (
    <div className="space-y-5 skeleton p-6" aria-busy="true" aria-label="Loading form">
      <div className="skeleton-line w-full" />
      <div className="skeleton-line w-full" />
      <div className="skeleton-line w-4/5" />
      <div className="skeleton-line w-full h-20" />
      <div className="skeleton-line w-1/3" />
    </div>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    const errors: Record<string, string> = {}

    if (!name) errors.name = 'Name is required.'
    if (!email) errors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.'
    if (!message) errors.message = 'Message is required.'

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setStatus('error')
      setErrorMsg('Correct the highlighted fields and try again.')
      return
    }

    setFieldErrors({})
    setStatus('submitting')
    const org = String(data.get('organization') || '').trim()
    const subject = encodeURIComponent(`JucheGang Contact: ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org || 'N/A'}\n\n${message}`
    )
    window.location.href = `mailto:panda@juche.org?subject=${subject}&body=${body}`
    setTimeout(() => setStatus('success'), 400)
  }

  if (status === 'submitting') {
    return <FormSkeleton />
  }

  if (status === 'success') {
    return (
      <div className="border border-[var(--rule)] p-6" role="status">
        <p className="font-macro text-lg mb-2">Message ready</p>
        <p className="text-sm text-[var(--muted)] text-body">
          Your email client should open. If it did not, write to{' '}
          <a href="mailto:panda@juche.org" className="link-text">panda@juche.org</a>{' '}
          directly.
        </p>
        <button type="button" className="btn-hazard mt-6" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          aria-invalid={!!fieldErrors.name}
          aria-describedby={fieldErrors.name ? 'name-error' : 'name-hint'}
        />
        <span id="name-hint" className="form-hint">Your full name</span>
        {fieldErrors.name && (
          <p id="name-error" className="font-mono-ui text-[var(--hazard)] mt-1" role="alert">{fieldErrors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? 'email-error' : 'email-hint'}
        />
        <span id="email-hint" className="form-hint">We reply within 2 business days</span>
        {fieldErrors.email && (
          <p id="email-error" className="font-mono-ui text-[var(--hazard)] mt-1" role="alert">{fieldErrors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="organization">Organization</label>
        <input type="text" id="organization" name="organization" autoComplete="organization" />
        <span className="form-hint">Optional</span>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? 'message-error' : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" className="font-mono-ui text-[var(--hazard)] mt-1" role="alert">{fieldErrors.message}</p>
        )}
      </div>
      {status === 'error' && !Object.keys(fieldErrors).length && (
        <p className="font-mono-ui text-[var(--hazard)]" role="alert">{errorMsg}</p>
      )}
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
      </button>
    </form>
  )
}

export default ContactForm