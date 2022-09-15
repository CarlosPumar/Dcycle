const Navbar = {
  Name: 'Name',
  Covid: 'Covid',
  GeneralInformation: 'General Information',
  OneDayInformation: '1 Day Information',
};

const NameInformationPage = {
  IntroduceName: 'Introduce name',
  Send: 'Send',
  ErrorIntroduceName: 'Introduce name',
  ProbableAge: 'Age',
  Gender: 'Gender',
  GenderProbability: 'Gender probability',
  Country: 'Country',
  CountryProbabiliy: 'Country probability',
  CountryIconFrom: 'Icon ',
  Male: 'Male',
  Female: 'Female',
};

const LineChartInformationPage = {
  EEUUAcumulationData: 'Covid Data EEUU',
  InfoDayOf: 'Información del día ',
  Cases: 'Cases',
  Tests: 'Tests',
  Deaths: 'Deaths',
};

const PieChartInformationPage = {
  DayInformation: 'Day Information ',
  Hospitalized: 'Hospitalized',
  InICU: 'In ICU',
  OnVentilator: 'On Ventilator',
  OnlyHospitalized: 'Only Hospitalized',
};

const en = {
  ...Navbar,
  ...NameInformationPage,
  ...LineChartInformationPage,
  ...PieChartInformationPage,
};

export default en;
