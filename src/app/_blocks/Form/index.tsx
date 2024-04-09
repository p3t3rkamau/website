'use client'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { Button } from '../../_components/Button'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { buildInitialFormState } from './buildInitialFormState'
import { fields } from './fields'

import classes from './index.module.scss'

export interface Value {
  [key: string]: unknown
}

export interface Data {
  [key: string]: Value | Value[]
}

export interface FormProps {
  form: {
    id: string
    fields: any[]
    submitButtonLabel: string
    confirmationType: string
    redirect?: {
      url: string
    }
    confirmationMessage?: {
      [key: string]: unknown
    }
  }
}

const Form: React.FC<FormProps> = ({ form }) => {
  const {
    id: formID,
    fields: formFields,
    submitButtonLabel,
    confirmationType,
    redirect,
    confirmationMessage,
  } = form

  const formMethods = useForm({
    defaultValues: buildInitialFormState(formFields),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<{ status?: string; message: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    async (data: Data) => {
      setError(undefined)
      setIsLoading(true)

      try {
        const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            form: formID,
            submissionData: Object.entries(data).map(([name, value]) => ({
              field: name,
              value,
            })),
          }),
        })

        const res = await req.json()

        setIsLoading(false)

        if (req.status >= 400) {
          setError({
            status: res.status,
            message: res.errors?.[0]?.message || 'Internal Server Error',
          })
          return
        }

        setHasSubmitted(true)

        if (confirmationType === 'redirect' && redirect) {
          router.push(redirect.url)
        }
      } catch (err) {
        console.warn(err)
        setIsLoading(false)
        setError({
          message: 'Something went wrong.',
        })
      }
    },
    [router, formID, confirmationType, redirect],
  )

  return (
    <Gutter>
      <div
        className={[classes.form, hasSubmitted && classes.hasSubmitted].filter(Boolean).join(' ')}
      >
        {!isLoading && hasSubmitted && confirmationType === 'message' && (
          <RichText className={classes.confirmationMessage} content={confirmationMessage} />
        )}
        {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
        {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
        {!hasSubmitted && (
          <form id={formID} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.fieldWrap}>
              {formFields &&
                formFields.map((field, index) => {
                  const Field = fields?.[field.blockType]
                  if (Field) {
                    return (
                      <React.Fragment key={index}>
                        <Field
                          form={form}
                          {...field}
                          {...formMethods}
                          register={register}
                          errors={errors}
                          control={control}
                        />
                      </React.Fragment>
                    )
                  }
                  return null
                })}
            </div>
            <Button label={submitButtonLabel} appearance="primary" el="button" form={formID} />
          </form>
        )}
      </div>
    </Gutter>
  )
}

export default Form
