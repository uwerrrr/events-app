class SelectedDate {
  // Property
  selectedDate: Date;
  monthStr: string;
  year: number;

  // Constructor
  constructor(selectedDate: Date) {
    this.selectedDate = selectedDate;
    this.monthStr = selectedDate.toLocaleDateString("en-US", {
      month: "long",
    });
    this.year = selectedDate.getUTCFullYear();
  }
}

export { SelectedDate };
