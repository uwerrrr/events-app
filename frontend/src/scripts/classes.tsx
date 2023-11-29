class ViewDate {
  // Property
  viewDate: Date;
  monthStr: string;
  year: number;
  month: number; // 0-11

  // Constructor
  constructor(viewDate: Date) {
    this.viewDate = viewDate;
    this.viewDate.setDate(1);
    
    this.month = viewDate.getMonth();
    this.monthStr = viewDate.toLocaleDateString("en-US", {
      month: "long",
    });
    this.year = viewDate.getUTCFullYear();
  }
}

export { ViewDate };
