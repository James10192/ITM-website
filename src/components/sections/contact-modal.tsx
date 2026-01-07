'use client'

import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ContactForm } from './contact-form'

interface ContactModalProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export function ContactModal({
  children,
  title = 'Demander un devis',
  description = 'Remplissez ce formulaire et notre équipe vous contactera dans les plus brefs délais.',
}: ContactModalProps) {
  const [open, setOpen] = React.useState(false)

  const handleSuccess = () => {
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-primary-900">{title}</DialogTitle>
          <DialogDescription className="text-secondary-600">{description}</DialogDescription>
        </DialogHeader>
        <ContactForm onSuccess={handleSuccess} className="mt-4" />
      </DialogContent>
    </Dialog>
  )
}
