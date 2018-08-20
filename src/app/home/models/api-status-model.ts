export class ApiStatusModel {
  public rms: string;
  public router: string;
  public feeder: string;

  constructor() {
    this.rms = this.router = this.feeder = '0';
  }
}
