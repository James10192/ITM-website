'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Mail, Phone, User, Building2, MessageSquare, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z
    .string()
    .regex(/^(\+225)?\s?\d{10}$/, 'Format invalide (ex: +225 0777589211 ou 0777589211)'),
  projectType: z.enum(['particulier', 'promoteur', 'entreprise', 'investisseur', 'autre'], {
    required_error: 'Veuillez sélectionner un type de projet',
  }),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  onSuccess?: () => void
  className?: string
}

export function ContactForm({ onSuccess, className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const projectType = watch('projectType')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Implement API route for sending email via Resend
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      console.log('Form data:', data)

      setSubmitStatus('success')
      reset()

      if (onSuccess) {
        setTimeout(() => {
          onSuccess()
        }, 2000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="space-y-6">
        {/* Name Input */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-primary-800">
            Nom complet *
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary-500" />
            <Input
              id="name"
              placeholder="Jean-Marc Kouassi"
              className="pl-10"
              {...register('name')}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
          {errors.name && (
            <p className="text-sm text-error" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-primary-800">
            Email *
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary-500" />
            <Input
              id="email"
              type="email"
              placeholder="jmkouassi@example.com"
              className="pl-10"
              {...register('email')}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Input */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-primary-800">
            Téléphone *
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary-500" />
            <Input
              id="phone"
              type="tel"
              placeholder="+225 0777589211"
              className="pl-10"
              {...register('phone')}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-error" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Project Type Select */}
        <div className="space-y-2">
          <Label htmlFor="projectType" className="text-primary-800">
            Vous êtes *
          </Label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-secondary-500" />
            <Select
              onValueChange={value =>
                setValue('projectType', value as ContactFormData['projectType'], {
                  shouldValidate: true,
                })
              }
              value={projectType}
            >
              <SelectTrigger
                id="projectType"
                className="pl-10"
                aria-invalid={errors.projectType ? 'true' : 'false'}
              >
                <SelectValue placeholder="Sélectionnez votre profil" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="particulier">Particulier à fort pouvoir d'achat</SelectItem>
                <SelectItem value="promoteur">Promoteur immobilier</SelectItem>
                <SelectItem value="entreprise">Entreprise / Institution</SelectItem>
                <SelectItem value="investisseur">Investisseur immobilier</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {errors.projectType && (
            <p className="text-sm text-error" role="alert">
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Message Textarea */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-primary-800">
            Message *
          </Label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-secondary-500" />
            <Textarea
              id="message"
              placeholder="Décrivez votre projet (maison IBAK HOME, portes métalliques, palissades, etc.)"
              className="min-h-[150px] pl-10 pt-3"
              {...register('message')}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
          </div>
          {errors.message && (
            <p className="text-sm text-error" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            'Envoyer ma demande'
          )}
        </Button>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="rounded-md bg-success/10 p-4 text-center">
            <p className="text-sm font-medium text-success">
              Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs
              délais.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="rounded-md bg-error/10 p-4 text-center">
            <p className="text-sm font-medium text-error">
              Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par
              téléphone.
            </p>
          </div>
        )}
      </div>
    </form>
  )
}
