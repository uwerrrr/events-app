class ViewDate {
  // Property
  date: Date;
  monthStr: string = "";
  year: number = 0;
  month: number = 0; // 0-11
  daysInMonth: number = 0; // 28-31
  monthLastDate: number = this.daysInMonth; // = daysInMonth
  monthFirstDay: number = 0; // 0-6

  // Constructor
  constructor(viewDate: Date) {
    this.date = viewDate;
    this.date.setDate(1);

    this.updateProperties();
  }

  // Methods
  private updateProperties() {
    this.month = this.date.getMonth();
    this.monthStr = this.date.toLocaleDateString("en-US", {
      month: "long",
    });
    this.year = this.date.getUTCFullYear();
    this.daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    this.monthLastDate = this.daysInMonth;
    this.monthFirstDay = new Date(this.year, this.month, 1).getDay() - 1;
  }

  nextMonth() {
    this.date.setMonth(this.month + 1);
    this.updateProperties();
  }

  prevMonth() {
    this.date.setMonth(this.month - 1);
    this.updateProperties();
  }
}

export default ViewDate;
