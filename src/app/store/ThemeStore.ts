import { EScreenSizes } from 'app/constants/screens';
import { makeAutoObservable } from 'mobx';

class ThemeStore {
  screenSize: EScreenSizes = EScreenSizes.HD;

  constructor() {
    makeAutoObservable(this);
  }

  setScreenSize(value: EScreenSizes) {
    this.screenSize = value;
  }
}

export const themeStore = new ThemeStore();
