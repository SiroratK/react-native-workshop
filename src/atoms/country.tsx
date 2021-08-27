import {atom} from 'recoil';

export const selectedCountryState = atom({
  key: 'selectedCountryState',
  default: '' as String,
});
