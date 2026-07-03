// Datos — AgroPredict AI. Las métricas se leen de datos.json (actualizado por el bot).
import datos from "./datos.json";

export const tickerItems = [
  { label: "SOJA CBOT JUL-26", value: datos.chicago + " USD/tn", delta: datos.delta_chicago, up: true },
  { label: "PIZARRA ROSARIO", value: datos.pizarra, delta: "—", up: true },
  { label: "FAS TEÓRICO", value: datos.fas, delta: "—", up: true },
  { label: "MAÍZ CBOT", value: "182.40 USD/tn", delta: "-0.35%", up: false },
  { label: "TRIGO CBOT", value: "214.75 USD/tn", delta: "+0.22%", up: true },
  { label: "DÓLAR EXPORTADOR", value: "$1.470", delta: "+0.14%", up: true },
  { label: "ACEITE DE SOJA", value: "912.30 USD/tn", delta: "+1.85%", up: true },
  { label: "HARINA DE SOJA", value: "338.10 USD/tn", delta: "-0.12%", up: false },
];

export const metrics = [
  { label: "Chicago Jul-26", value: datos.chicago, unit: "USD/tn", delta: datos.delta_chicago, up: true, note: "Cierre CBOT · " + datos.actualizado },
  { label: "Pizarra Rosario", value: datos.pizarra, unit: "", delta: "Cámara arbitral", up: true, note: "Precio local" },
  { label: "FAS Teórico", value: datos.fas, unit: "ARS/tn", delta: "Paridad export.", up: true, note: "Capacidad de pago del exportador" },
  { label: "Probabilidad de suba", value: datos.probabilidad, unit: "%", delta: "7 días", up: true, note: "Modelo fundamental" },
  { label: "Confianza", value: datos.confianza, unit: "", delta: "Drivers", up: true, note: "Consistencia de señales" },
  { label: "Sentimiento", value: datos.sentimiento, unit: "", delta: "Análisis", up: true, note: "Chicago + clima + noticias" },
];

// 30 días de precio simulado (USD/tn) + banda de predicción
export const chartSeries = [
  362.1, 360.4, 363.8, 365.2, 364.1, 367.5, 369.0, 366.8, 368.2, 371.4,
  370.1, 372.9, 371.5, 374.2, 373.0, 375.8, 374.6, 377.1, 376.2, 378.9,
  377.5, 380.2, 379.1, 381.6, 380.4, 382.8, 381.9, 383.7, 384.5, 385.2,
];

export const variables = [
  { name: "Chicago", desc: "Futuros CBOT, variable líder del precio local", icon: "chart" },
  { name: "FAS", desc: "Paridad de exportación y margen del exportador", icon: "scale" },
  { name: "Clima Brasil", desc: "Lluvias y sequías en Mato Grosso y Paraná", icon: "cloud" },
  { name: "Clima EE.UU.", desc: "Condiciones del Medio Oeste en siembra y cosecha", icon: "sun" },
  { name: "USDA", desc: "Informes WASDE y stocks trimestrales", icon: "doc" },
  { name: "Tipo de cambio", desc: "Dólar exportador y brecha cambiaria", icon: "currency" },
  { name: "Exportaciones", desc: "Embarques, line-up de buques y demanda china", icon: "ship" },
  { name: "Volumen", desc: "Volumen operado en CBOT y mercado local", icon: "bars" },
  { name: "Open Interest", desc: "Posiciones abiertas de fondos especulativos", icon: "layers" },
  { name: "Estacionalidad", desc: "Patrones históricos de cosecha y retención", icon: "calendar" },
];

export const pipeline = [
  { name: "Data Collectors", desc: "Ingesta de CBOT, pizarra, clima y USDA", icon: "collect" },
  { name: "Data Warehouse", desc: "Histórico normalizado en series de tiempo", icon: "db" },
  { name: "Feature Engineering", desc: "Brechas, rezagos, medias y estacionalidad", icon: "gear" },
  { name: "Machine Learning", desc: "Modelo ensemble con validación temporal", icon: "brain" },
  { name: "Backtesting", desc: "Walk-forward sobre 10 años de datos", icon: "history" },
  { name: "API", desc: "Predicciones servidas en tiempo real", icon: "api" },
  { name: "Dashboard", desc: "Monitoreo visual del mercado", icon: "screen" },
  { name: "Telegram", desc: "Alertas accionables al instante", icon: "send" },
  { name: "App móvil", desc: "Seguimiento desde el campo", icon: "phone" },
];

export const steps = [
  { n: "1", title: "Recolección de datos", desc: "Precios, clima e informes oficiales se capturan de forma continua desde múltiples fuentes." },
  { n: "2", title: "Procesamiento", desc: "Los datos crudos se limpian y transforman en variables con significado económico." },
  { n: "3", title: "Predicción", desc: "El modelo estima probabilidad de suba o baja con horizonte de 7 a 10 días." },
  { n: "4", title: "Alertas", desc: "Cuando la señal supera el umbral de confianza, llega directo a tu Telegram." },
];
