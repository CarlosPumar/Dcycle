const Navbar = {
  Name: 'Nombre',
  Covid: 'Covid',
  GeneralInformation: 'Información General',
  OneDayInformation: 'Información de 1 día',
};

const NameInformationPage = {
  IntroduceName: 'Introduzca un nombre',
  Send: 'Enviar',
  ErrorIntroduceName: 'Introduce un nombre',
  ProbableAge: 'Edad más probable',
  Gender: 'Género',
  GenderProbability: 'Probabilidad del género',
  Country: 'País',
  CountryProbabiliy: 'Probabilidad de ',
  CountryIconFrom: 'Icono de ',
  Male: 'Hombre',
  Female: 'Mujer',
};

const LineChartInformationPage = {
  EEUUAcumulationData: 'Informacion del Covid EEUU',
  Cases: 'Casos',
  Tests: 'Pruebas',
  Deaths: 'Muertes',
};

const PieChartInformationPage = {
  DayInformation: 'Información del día ',
  Hospitalized: 'Hospitalizados',
  InICU: 'En UCI',
  OnVentilator: 'Con Respiración Asistida',
  OnlyHospitalized: 'Solo Hospitalizados',
};

const es = {
  ...Navbar,
  ...NameInformationPage,
  ...LineChartInformationPage,
  ...PieChartInformationPage,
};

export default es;
