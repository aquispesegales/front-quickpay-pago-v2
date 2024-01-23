
import moment from 'moment';
export function convertToDDMMYYYY(pFecha:string):string {
    if (pFecha != null && pFecha != "" && pFecha!="0000-00-00")
      return moment(pFecha, "YYYY-MM-DDTHH:mm:ssZ").format("DD/MM/YYYY HH:mm");
    return "";
}
export function formatearMoneda(pMonto:string):string {
  if (pMonto != null && pMonto != "" )
    {
      return Number(pMonto).toLocaleString('en', {
        timeZone: 'UTC', minimumFractionDigits: 2
      })
    }
  return "0.00";
}
