import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  email: z.string().email(),
  managerName: z.string().email(),
  phone: z.string().email(),
  restaurantName: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log('data :>> ', data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso.', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar o restaurante.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />

      <div className="p-8">
        <Button className="absolute right-8 top-8" variant={'ghost'} asChild>
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
                disabled={isSubmitting}
                readOnly={isSubmitting}
              />

              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
                disabled={isSubmitting}
                readOnly={isSubmitting}
              />

              <Label htmlFor="email">Seu E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                disabled={isSubmitting}
                readOnly={isSubmitting}
              />

              <Label htmlFor="phone">Seu celular</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                disabled={isSubmitting}
                readOnly={isSubmitting}
              />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com os nossos{' '}
              <a className="italic underline underline-offset-4" href="">
                Termos de Serviço
              </a>{' '}
              e com as{' '}
              <a className="italic underline underline-offset-4" href="">
                Políticas de Privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
