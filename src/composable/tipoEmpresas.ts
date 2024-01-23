export function useTipoEmpresas() {

  interface TipoEmpresas {
    dominioId: number;
    descripcion: string;
    
  }

  const lstTipoEmpresas: Array<TipoEmpresas> = ([
    {
      dominioId: 4,
      descripcion: 'UNIVERSIDADES',
    
    },
    {
      dominioId: 84,
      descripcion: 'CLUBES'
    }
    ,
    {
      dominioId: 85,
      descripcion: 'EVENTOS'
    }
    ,
    {
      dominioId: 86,
      descripcion: 'SEGUROS'
    }
    ,
    {
      dominioId: 87,
      descripcion: 'SERVICIOS'
    }
    ,
    {
      dominioId: 31,
      descripcion: 'COLEGIOS'
    }
  ]);
  return { lstTipoEmpresas }
}