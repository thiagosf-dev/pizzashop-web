import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2 leading-none">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input className="h-8 w-auto" placeholder="ID do pedido" />
      <Input className="h-8 w-[350px]" placeholder="Nome do cliente" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size="xs">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
