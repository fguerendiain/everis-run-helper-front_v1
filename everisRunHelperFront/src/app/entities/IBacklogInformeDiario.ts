export interface IBacklogInformeDiario{
    "backlog":{
        "priorizacionDiaBaja": number,
        "priorizacionDiaAlta": number,
        "priorizacionDiaUrgente": number,
        "reaperturas": number,
        "priorizados": number,
        "repetitivos": number,
        "totalPendientes": number
    },
    "datosUltimos6DiasArray":
        {"fecha": string,
        "reaperturas": number,
        "creadas": number,
        "resueltas": number,
        "urgentePriorizadoPorcentaje": string,
        "altaPriorizadoPorcentaje": string,
        "bajaPriorizadoPorcentaje": string}[]
    ,
    "distribucionModulo":
        {"module": string,
        "prd": number,
        "hml": number,
        "capa": number
        }[]
    ,"priorizadosPorRegistro":
        {"fecha": string,
        "noc": string,
        "resumen": string,
        "modulo": string,
        "entorno": string,
        "estado": string,
        "fechaCreacion": string
        }[]
}